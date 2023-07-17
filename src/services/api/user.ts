import bcrypt from 'bcrypt';

import { User } from '@prisma/client'
import prisma from 'services/prisma';

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return user;
};

export const authorizeUser = async ({ email, password }: { email: string; password: string }): Promise<User | null> => {
    const user = await findUserByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }

    return null;
};
