import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../database/config";

export const getProducts = async (req: Request, res: Response) => {
    const products = await prisma.products.findMany();

    res.json({
        msg: 'All products',
        data: products
    })
};

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'getProduct',
        id
    })
};

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'postProduct',
        body
    })
};

export const putProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putProduct',
        id,
        body
    })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteProduct',
        id
    })
}