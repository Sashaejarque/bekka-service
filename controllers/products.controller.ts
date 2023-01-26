import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../database/config";
import cloudinary from "cloudinary";

export const getProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany();

    res.json({
        data: products,
    })
};

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    });

    res.json({
        data: product
    })
};

export const postProduct = async (req: Request, res: Response) => {
    const body = req.body;
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
            stock: body.stock,
            image: body.image,
            public_id: body.public_id,
        }
    });

    res.json({
        msg: 'Created product correctly',
        newProduct
    })
};

export const putProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const product = await prisma.product.update({
        where: {id},
        data: {
            name: body.name,
            price: body.price,
            stock: body.stock,
            image: body.image,
            public_id: body.public_id,
        },
    });

    res.json({
        msg: 'Product updated correctly',
        product
    })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const productToDelete = await prisma.product.findUnique({ where: {id} });
    if(!productToDelete) return res.status(404).json({msg: 'Product not found'});

    const { public_id } = productToDelete;
    await cloudinary.v2.uploader.destroy(public_id);
    const product = await prisma.product.delete({where: {id}});

    res.json({
        msg: 'Product deleted correctly',
        product
    })
}