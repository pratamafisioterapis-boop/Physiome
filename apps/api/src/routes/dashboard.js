import express from 'express';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';

const router = express.Router();

// GET /dashboard/admin-stats
router.get('/admin-stats', jwtAuth, async (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ error: 'Forbidden' });

    try {
        const [patientsCount, therapistsCount, programsCount, appointmentsCount] = await Promise.all([
            prisma.patients.count({ where: { clinic_id: req.clinicId } }),
            prisma.users.count({ where: { role: 'therapist', clinic_id: req.clinicId } }),
            prisma.exercise_programs.count({ where: { clinic_id: req.clinicId } }),
            prisma.appointments.count({ 
                where: { 
                    clinic_id: req.clinicId,
                    date: new Date() // Prisma akan otomatis memformat ke DATE MySQL
                } 
            })
        ]);

        res.json({
            patients: patientsCount,
            therapists: therapistsCount,
            programs: programsCount,
            appointments: appointmentsCount,
            adherence: 75
        });
    } catch (error) {
        next(error);
    }
});

// GET /dashboard/patient-stats
router.get('/patient-stats', jwtAuth, async (req, res, next) => {
    try {
        const appointments = await prisma.soap_notes.findMany({
            where: { patient_id: req.userId },
            take: 5,
            orderBy: { created_at: 'desc' }
        });

        res.json({
            programs: [],
            appointments: [],
            stats: { completed: 12, adherence: 85, pain: '2/10' }
        });
    } catch (error) {
        next(error);
    }
});

export default router;