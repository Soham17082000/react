import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


export const userauthvalidation = async (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];


    if (!token) {
        return res.status(401).send({ message: 'Invalid Token' });
    }

  //  console.log(`token:${token}`);

    jwt.verify(token, process.env.APP_KEY as string, async (err: any, userdata: any) => {
        if (err) {
            return res.status(401).send({ message: 'Invalid token' });
        }

        try {
           console.log("id sdfdsfsd",req)
            req.Id=userdata.id;
            console.log("kjhvdf",req.Id)
            next();
        } catch (e: any) {
            return res.status(e.status || 401).send({ message: 'User not found' });
        }
    });
};