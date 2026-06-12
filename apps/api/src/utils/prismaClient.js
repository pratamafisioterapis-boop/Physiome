import { PrismaClient } from '@prisma/client';
import logger from './logger.js';

const prisma = new PrismaClient({
    log: ['error', 'warn'], // Tetap gunakan log level ini
});

async function connectToDatabase() {
    try {
        await prisma.$connect();
        logger.info('Connected to MariaDB/MySQL via Prisma');
    } catch (error) {
        logger.error('Failed to connect to database:', error);
        process.exit(1);
    }
}

connectToDatabase();

export default prisma;