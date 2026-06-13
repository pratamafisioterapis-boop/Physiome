import express from 'express';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
router.use(jwtAuth);

// GET /therapists - Ambil semua user dengan role therapist di klinik yang sama
router.get('/', async (req, res, next) => {
    try {
        const therapists = await prisma.users.findMany({
            where: {
                clinic_id: req.clinicId,
                role: 'therapist'
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                role: true,
                created_at: true
            }
        });
        res.json(therapists);
    } catch (error) {
        next(error);
    }
});

// POST /therapists - Tambah terapis baru (sebagai user)
router.post('/', async (req, res, next) => {
    const { fullName, email, password, clinic_id } = req.body;
    try {
        const user = await prisma.users.create({
            data: {
                id: uuidv4(),
                fullName,
                email,
                password, // Pastikan di-hash di production!
                role: 'therapist',
                clinic_id: clinic_id || req.clinicId
            }
        });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

// PUT /therapists/:id - Update data terapis
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { fullName, email } = req.body;
    try {
        const user = await prisma.users.update({
            where: { 
                id: id,
                clinic_id: req.clinicId,
                role: 'therapist'
            },
            data: {
                fullName,
                email
            }
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// DELETE /therapists/:id - Hapus terapis
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await prisma.users.delete({
            where: {
                id: id,
                clinic_id: req.clinicId,
                role: 'therapist'
            }
        });
        
        if (!result) {
            return res.status(404).json({
                message: 'Therapist not found'
            });
        }

        return res.status(200).json({
            message: 'Therapist deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

export default router;