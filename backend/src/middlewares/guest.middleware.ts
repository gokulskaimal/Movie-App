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
        res.cookie('guestId' , guestId ,{
            httpOnly : true,
            maxAge : 60 * 60 * 24 * 30 * 1000, // 30 days in milliseconds
            sameSite: 'lax'
        })
    }
    req.guestId = guestId
    next()

}