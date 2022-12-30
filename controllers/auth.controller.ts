import { Request, Response } from "express";


export const handleLogin = async (req: Request, res: Response) => {
    res.json({
        msg: 'handleLogin working'
    })
};