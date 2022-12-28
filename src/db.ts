import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();

const dbConnection = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected");

    } catch (error) {
        console.log(error);
    }
};

export default dbConnection;