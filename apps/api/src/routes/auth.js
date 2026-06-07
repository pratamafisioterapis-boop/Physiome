import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// POST /auth/validate-invite-code - Validate invite code
router.post('/validate-invite-code', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'code is required' });
  }

  // Query invite_codes collection for code (case-insensitive)
  const inviteCode = await pb.collection('invite_codes').getFirstListItem(
    `code = "${code.toLowerCase()}"`,
    { requestKey: null }
  ).catch(() => null);

  // Check if code exists
  if (!inviteCode) {
    throw new Error('Code is invalid');
  }

  // Check if code is active
  if (!inviteCode.is_active) {
    throw new Error('Code is invalid');
  }

  // Check if code is expired (expires_at is null or in future)
  if (inviteCode.expires_at) {
    const expiryDate = new Date(inviteCode.expires_at);
    if (expiryDate < new Date()) {
      throw new Error('Code is expired');
    }
  }

  // Check if code is unused (used_by is null)
  if (inviteCode.used_by) {
    throw new Error('Code is already used');
  }

  // All checks passed
  res.json({
    valid: true,
    role: inviteCode.role,
    message: 'Code is valid',
  });
});

// POST /auth/register - Register new user with optional invite code
router.post('/register', async (req, res) => {
  const { email, password, fullName, inviteCode } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).json({ error: 'email, password, and fullName are required' });
  }

  let role = 'therapist'; // Default role

  // If inviteCode provided, validate it
  if (inviteCode) {
    const inviteCodeRecord = await pb.collection('invite_codes').getFirstListItem(
      `code = "${inviteCode.toLowerCase()}"`,
      { requestKey: null }
    ).catch(() => null);

    // Validate code
    if (!inviteCodeRecord) {
      throw new Error('Invalid or expired invite code');
    }

    if (!inviteCodeRecord.is_active) {
      throw new Error('Invalid or expired invite code');
    }

    if (inviteCodeRecord.expires_at) {
      const expiryDate = new Date(inviteCodeRecord.expires_at);
      if (expiryDate < new Date()) {
        throw new Error('Invalid or expired invite code');
      }
    }

    if (inviteCodeRecord.used_by) {
      throw new Error('Invalid or expired invite code');
    }

    // Extract role from validated code
    role = inviteCodeRecord.role;

    // Create user in pb.collection('users')
    const newUser = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
      fullName,
      role,
      invite_code: inviteCodeRecord.id,
    });

    // Update the invite_code record: set used_by = newUser.id, is_active = false
    await pb.collection('invite_codes').update(inviteCodeRecord.id, {
      used_by: newUser.id,
      is_active: false,
    });

    logger.info(`User registered with invite code: ${newUser.id}`);

    res.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } else {
    // No invite code provided, create user with default role
    const newUser = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
      fullName,
      role,
    });

    logger.info(`User registered without invite code: ${newUser.id}`);

    res.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  }
});

export default router;