import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const dbConnection = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected");

        /* await prisma.Products.create({
            data: {
                name: "Product 1",
                price: 100,
                stock: 10,
                image: 'por ahora string',
            },
        })
        await prisma.Products.create({
            data: {
                name: "Product 2",
                price: 200,
                stock: 20,
                image: 'por ahora string',
            },
        })

        console.log("Products created");
        const products = await prisma.Products.findMany();
        console.log(products); */

    } catch (error) {
        console.log(error);
    }
};

export default dbConnection;