import { Request , Response , NextFunction } from "express";
import {z} from 'zod';
import { HTTP_STATUS } from "../constants/http-status";

const guestIdSchema = z.uuid()

declare global{
    namespace Express{
        interface Request{
            guestId: string
        }
    }
}

export const guestMiddleware = (req :Request ,res: Response ,next : NextFunction) => {
    const guestId = req.headers['x-guest-id'];

    const result = guestIdSchema.safeParse(guestId)

    if(!result.success){
        return res.status(HTTP_STATUS.BAD_REQUEST).json({success : false , message : "Valid guest ID is required"})
    }

    req.guestId = result.data
    next()

}