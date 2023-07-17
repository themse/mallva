import prisma from 'services/prisma';

export const seedUser = async () => {
    try {
        await prisma.user.create({
            data: {
                email: 'johnsnow@example.com',
                password: 'password123',
            },
        });

        console.log('Test user seeded successfully');
    } catch (error) {
        console.error('Error seeding test user:', error);
    } finally {
        await prisma.$disconnect();
    }
};
