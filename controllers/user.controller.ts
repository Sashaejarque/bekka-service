import { Request, Response } from "express";


export const getUsers = async (req: Request, res: Response) => {
    res.json({
        msg: 'getUsers'
    });
}

export const createUser = async (req: Request, res: Response) => {
    res.json({
        msg: 'createUsers'
    });
}

export const updateUser = async (req: Request, res: Response) => {
    res.json({
        msg: 'updateUsers'
    });
}

export const deleteUser = async (req: Request, res: Response) => {
    res.json({
        msg: 'deleteUsers'
    });
}