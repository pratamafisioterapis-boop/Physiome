import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

try {
    await prisma.$connect();
    console.log('CONNECTED');
} catch (e) {
    console.error(e);
}

process.exit(0);