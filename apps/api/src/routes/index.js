import { Router } from 'express';
import healthCheck from './health-check.js';
import integratedAiRouter from './integrated-ai.js';
import billingRouter from './billing.js';
import authRouter from './auth.js';
import clinicsRouter from './clinics.js';
import languageRouter from './language.js';
import dashboardRouter from './dashboard.js';
import patientsRouter from './patients.js';
import appointmentsRouter from './appointments.js';
import therapistsRouter from './therapists.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/integrated-ai', integratedAiRouter);
    router.use('/billing', billingRouter);
    router.use('/auth', authRouter);
    router.use('/clinics', clinicsRouter);
    router.use('/dashboard', dashboardRouter);
    router.use('/patients', patientsRouter);
    router.use('/appointments', appointmentsRouter);
    router.use('/therapists', therapistsRouter);
    router.use('/user-preferences/language', languageRouter);

    return router;
};