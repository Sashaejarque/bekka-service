import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();

const dbConnection = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected");

       /*  await prisma.product.create({
            data: {
                name: "Product 1",
                price: 100,
                stock: 10,
                image: 'por ahora string',
            },
        })
        await prisma.product.create({
            data: {
                name: "Product 2",
                price: 200,
                stock: 20,
                image: 'por ahora string',
            },
        })

        console.log("Products created");
        const products = await prisma.product.findMany();
        console.log(products); */

    } catch (error) {
        console.log(error);
    }
};

export default dbConnection;