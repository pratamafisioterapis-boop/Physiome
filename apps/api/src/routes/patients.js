import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../utils/prismaClient.js';
import { jwtAuth } from '../middleware/jwt-auth.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.use(jwtAuth);

// GET /patients - Get all patients for the user's clinic
router.get('/', async (req, res, next) => {
    try {
        const patients = await prisma.patients.findMany({
            where: {
                clinic_id: req.clinicId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        res.json(patients);
    } catch (error) {
        next(error);
    }
});

// POST /patients - Menambahkan pasien baru
router.post('/', async (req, res, next) => {
    const { 
        full_name, fullName, name,
        gender, date_of_birth, birth_date,
        phone, email, address, occupation, 
        main_complaint, diagnosis, status 
    } = req.body;

    const patientName = full_name || fullName || name;

    if (!patientName) {
        return res.status(400).json({ error: 'Patient name is required' });
    }

    try {
        const patient = await prisma.patients.create({
            data: {
                id: uuidv4(),
                name: patientName,
                email: email || null,
                phone: phone || null,
                birth_date: (birth_date || date_of_birth) ? new Date(birth_date || date_of_birth) : null,
                gender: gender ? gender.toLowerCase() : null, // Mengonversi 'Male' -> 'male' sesuai Enum DB
                address: address || null,
                occupation: occupation || null,
                main_complaint: main_complaint || null,
                diagnosis: diagnosis || null,
                status: status || 'Active', // Mendukung 'Active', 'Inactive', 'Discharged'
                clinic_id: req.clinicId // Diambil dari middleware jwtAuth
            }
        });
        res.status(201).json(patient);
    } catch (error) {
        next(error);
    }
});

export default router;