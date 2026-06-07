import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import { pocketbaseAuth } from '../middleware/pocketbase-auth.js';

const router = express.Router();

router.use(pocketbaseAuth);

// POST /language/set-preference - Set user language preference
router.post('/set-preference', async (req, res) => {
  const { language } = req.body;

  if (!language) {
    return res.status(400).json({ error: 'language is required' });
  }

  if (!['id', 'en'].includes(language)) {
    return res.status(400).json({ error: 'language must be "id" or "en"' });
  }

  // Get or create user language preference record
  const userId = req.pocketbaseUserId;
  let preference = await pb.collection('user_language_preferences').getFirstListItem(
    `userId = "${userId}"`,
    { requestKey: null }
  ).catch(() => null);

  if (preference) {
    // Update existing preference
    await pb.collection('user_language_preferences').update(preference.id, {
      preferred_language: language,
      app_language: language,
    });
  } else {
    // Create new preference
    await pb.collection('user_language_preferences').create({
      userId,
      preferred_language: language,
      app_language: language,
      exercise_language: language,
      reminder_language: language,
    });
  }

  res.json({ success: true, language });
});

// GET /language/preferences - Get user language preferences
router.get('/preferences', async (req, res) => {
  const userId = req.pocketbaseUserId;

  const preference = await pb.collection('user_language_preferences').getFirstListItem(
    `userId = "${userId}"`,
    { requestKey: null }
  ).catch(() => null);

  if (!preference) {
    // Return default preferences if not found
    return res.json({
      preferred_language: 'en',
      app_language: 'en',
      exercise_language: 'en',
      reminder_language: 'en',
    });
  }

  res.json({
    preferred_language: preference.preferred_language || 'en',
    app_language: preference.app_language || 'en',
    exercise_language: preference.exercise_language || 'en',
    reminder_language: preference.reminder_language || 'en',
  });
});

export default router;