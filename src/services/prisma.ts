import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // @ts-ignore TODO fix ts type error
    if (!global.prisma) {
        // @ts-ignore TODO fix ts type error
        global.prisma = new PrismaClient();
    }
    // @ts-ignore TODO fix ts type error
    prisma = global.prisma;
}

export default prisma;
