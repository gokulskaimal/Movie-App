import { Request , Response , NextFunction } from "express";
import {z} from 'zod'
import { HTTP_STATUS } from "../constants/http-status";


export const validate = (schema : z.ZodType) => (req : Request , res: Response , next : NextFunction) => {
    try{
        schema.parse({
            ...req.query, 
            ...req.body
        })
        next()
    }catch(err){
        return res.status(HTTP_STATUS.BAD_REQUEST).json({success : false , message : "validation failed" , error : err})
     
    }
}
