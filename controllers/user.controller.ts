import { Request, Response } from "express";
import { prisma } from "../database/config";
import bcryptjs from 'bcryptjs';


export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        where: {
            state: true
        }
    });
    const usersWithoutPassword = users.map(user => {
        const { password, state,  ...userWithoutPassword } = user;
        return userWithoutPassword;
    })
    res.json({
        data: usersWithoutPassword
    });
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });
    const { password: _, state, ...rest} = user;

    res.json({
        msg: 'User created correctly',
        rest,
    })
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    // Por ahora solo updateo el name
    // Cuando tenga el login funcionando hare el update de contrasena
    const user = await prisma.user.update({ where: { id }, data: { name,/*  email, password */ }});
    const { password, state, ...rest} = user;
    res.json({
        msg: 'User updated correctly',
        rest
    });
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.update({ where: { id }, data: { state: false }});

    const { password, state, ...rest} = user;
    res.json({
        msg: 'User deleted correctly',
        rest
    });
}