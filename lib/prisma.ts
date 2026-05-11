import { PrismaClient } from '@prisma/client';

// Ensure DATABASE_URL is loaded from environment
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
