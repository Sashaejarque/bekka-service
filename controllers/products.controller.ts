import { Request, Response } from "express";




export const getProducts = async (req: Request, res: Response) => {
    res.json({
        msg: 'getProducts'
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