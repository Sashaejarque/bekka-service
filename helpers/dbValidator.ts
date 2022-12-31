import { prisma } from "../database/config";


export const isProductInDb = async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}});
    if (!product) {
        throw new Error(`The product with id ${id} does not exist`);
    }
};

export const isUserInDbByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({where: {email}});
    if (user) {
        throw new Error(`The user with email ${email} already exists`);
    }
};

export const isUserInDbById = async (id: string) => {
    const user = await prisma.user.findUnique({where: {id}});
    if (!user) {
        throw new Error(`The user with id ${id} does not exist`);
    }
};

export const isUserDeleted = async (id: string) => {
    const user = await prisma.user.findUnique({where: {id}});
    if(!user) {
        throw new Error(`The user with id ${id} does not exist`);
    }
    if (!user?.state) {
        throw new Error(`The user with id ${id} has been deleted before`);
    }
};