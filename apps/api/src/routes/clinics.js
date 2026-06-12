import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';
import logger from '../utils/logger.js';

const router = express.Router();

// POST /clinics - Membuat klinik baru
// Digunakan saat proses onboarding
router.post('/', jwtAuth, async (req, res, next) => {
    const { name, phone, address, city } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Clinic name is required' });
    }

    try {
        const clinicId = uuidv4();
        const clinic = await prisma.clinics.create({
            data: {
                id: clinicId,
                name,
                phone: phone || null,
                address: address || null,
                city: city || null,
                created_by: req.userId
            }
        });

        logger.info(`New clinic created: ${clinic.name} by user ${req.userId}`);
        res.status(201).json(clinic);
    } catch (error) {
        logger.error('Error creating clinic:', error);
        next(error);
    }
});

// GET /clinics/:id - Mengambil detail klinik
router.get('/:id', jwtAuth, async (req, res, next) => {
    try {
        const clinic = await prisma.clinics.findUnique({
            where: { id: req.params.id }
        });
        if (!clinic) return res.status(404).json({ error: 'Clinic not found' });
        res.json(clinic);
    } catch (error) {
        next(error);
    }
});

export default router;