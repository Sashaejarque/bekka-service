import { Request, Response } from "express";
import { prisma } from "../database/config";
import bcryptjs from 'bcryptjs';
import { createJWT } from "../helpers/createJWT";


export const handleLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })
        console.log(user)
        if (!user) {
            return res.status(400).json({
                msg: 'Invalid password/user -exists'
            });
        }

        if (!user.state) {
            return res.status(400).json({
                msg: 'Invalid password/user state:false'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password )
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Invalid password/user -p'
            })
        }
        // Creando jwt
        const token = await createJWT(user.id)

        res.json({
            msg: 'Login successfully',
            jwt: token
        });

    } catch (error){
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
};