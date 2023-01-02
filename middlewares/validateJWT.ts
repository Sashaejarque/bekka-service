import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { prisma } from "../database/config";

interface JWTData {
    userId: string;
}
/* interface RequestWithUser extends Request {
    user: JWTData;
} */

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("tkn-authorize");
    if (!token) {
        return res.status(401).json({
            msg: "No token provided"
        });
    }

    try {
        if(!process.env.SECRETORPRIVATEKEY) throw new Error('Secret or private key not found');
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY) as JWTData;
        // TODO: Fix this error type
        // @ts-ignore
        req.user = payload;

        next(); 

    } catch(error) {
        console.log(error);
        res.status(401).json({
            msg: "Invalid token"
        });
    }
};

export default validateJWT;