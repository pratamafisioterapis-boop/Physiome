import express from 'express';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';

const router = express.Router();

router.use(jwtAuth); // Gunakan middleware JWT untuk proteksi rute

// GET /:userId - Ambil preferensi bahasa pengguna
router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;

  if (req.userId !== userId && req.userRole !== 'admin') {
    return res.status(403).json({
      error: 'Forbidden'
    });
  }

  try {
    let preference = await prisma.user_language_preferences.findUnique({
      where: {
        userId
      }
    });

    if (!preference) {
      preference = await prisma.user_language_preferences.create({
        data: {
          userId,
          preferred_language: 'en',
          app_language: 'en',
          exercise_language: 'en',
          reminder_language: 'en'
        }
      });
    }

    return res.json(preference);
  } catch (error) {
    next(error);
  }
});

// POST / - Buat preferensi bahasa baru
router.post('/', async (req, res, next) => {
  const { userId, user_id, preferred_language, app_language, exercise_language, reminder_language } = req.body;
  const targetId = userId || user_id;

  // Verifikasi bahwa pengguna yang diautentikasi memiliki izin untuk membuat preferensi ini
  if (req.userId !== targetId && req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Anda hanya dapat membuat preferensi bahasa untuk diri sendiri.' });
  }

  try {
    const newPref = await prisma.user_language_preferences.create({
      data: {
        userId: targetId,
        preferred_language,
        app_language,
        exercise_language,
        reminder_language,
      }
    });
    res.status(201).json(newPref); // 201 Created
  } catch (error) {
    next(error);
  }
});

// PUT /:userId - Perbarui preferensi bahasa
router.put('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  const data = req.body;

  // Verifikasi bahwa pengguna yang diautentikasi memiliki izin untuk memperbarui preferensi ini
  if (req.userId !== userId && req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Anda hanya dapat memperbarui preferensi bahasa Anda sendiri.' });
  }

  try {
    const existingPreference = await prisma.user_language_preferences.findFirst({
      where: { userId: userId }
    });

    if (!existingPreference) {
      return res.status(404).json({ error: 'Preferensi bahasa tidak ditemukan.' });
    }

    const updated = await prisma.user_language_preferences.update({
      where: { userId: userId }, // Update berdasarkan userId
      data: {
        ...data // Prisma akan otomatis mengelola updated_at jika diatur di schema
      }
    });
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

export default router;