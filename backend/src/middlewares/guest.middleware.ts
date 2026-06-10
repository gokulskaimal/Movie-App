import { Request , Response , NextFunction } from "express";
import { HTTP_STATUS } from "../constants/http-status";


declare global{
    namespace Express{
        interface Request{
            guestId: string
        }
    }
}

export const guestMiddleware = (req :Request ,res: Response ,next : NextFunction) => {
    let guestId = req.cookies['guestId']

    if(!guestId){
        guestId = crypto.randomUUID()
        const isProduction = process.env.NODE_ENV === 'production';
        res.cookie('guestId' , guestId ,{
            httpOnly : true,
            maxAge : 60 * 60 * 24 * 30 * 1000, // 30 days in milliseconds
            sameSite: isProduction ? 'none' : 'lax',
            secure: isProduction // required for 'none'
        })
    }
    req.guestId = guestId
    next()

}