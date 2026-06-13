import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.use(jwtAuth);

// GET /appointments - Get all appointments for the user's clinic
router.get('/', async (req, res, next) => {
    try {
        const appointments = await prisma.appointments.findMany({
            where: {
                clinic_id: req.clinicId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        res.json(appointments);
    } catch (error) {
        next(error);
    }
});

// POST /appointments - Menambahkan appointment baru
router.post('/', async (req, res, next) => {
    const { 
        patient_id, therapist_id, date, time, duration, status, notes 
    } = req.body;

    if (!patient_id || !therapist_id || !date || !time || !duration) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const appointment = await prisma.appointments.create({
            data: {
                id: uuidv4(),
                patient_id: patient_id,
                therapist_id: therapist_id,
                date: new Date(date),
                time: time,
                duration: duration,
                status: status || 'Scheduled',
                notes: notes || null,
                clinic_id: req.clinicId
            }
        });
        res.status(201).json(appointment);
    } catch (error) {
        next(error);
    }
});

// PUT /appointments/:id - Update appointment by ID
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const appointment = await prisma.appointments.update({
            where: {
                id: id,
                clinic_id: req.clinicId
            },
            data: {
                ...data
            }
        });
        res.json(appointment);
    } catch (error) {
        next(error);
    }
});

// DELETE /appointments/:id - Delete appointment by ID
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await prisma.appointments.delete({
            where: {
                id: id,
                clinic_id: req.clinicId
            }
        });
        if (!result) {
            return res.status(404).json({
                message: 'Appointment not found'
            });
        }

        return res.status(200).json({
            message: 'Appointment deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

export default router;