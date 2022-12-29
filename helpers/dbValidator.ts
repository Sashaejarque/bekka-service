import { prisma } from "../database/config";


export const isProductInDb = async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}});
    if (!product) {
        throw new Error(`The product with id ${id} does not exist`);
    }
};