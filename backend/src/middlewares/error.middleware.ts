import { NextFunction , Request , Response } from "express";
import { ApiError } from "../utils/ApiError";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/messages";

export const errorMiddleware = (error : Error , _req : Request , res: Response , _next: NextFunction) =>{
    if(error instanceof ApiError){
        return res.status(error.statusCode).json({success : false , message : error.message})
    }

    console.error(error)

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERORR).json({success : false , message : MESSAGES.INTERNAL_SERVER_ERROR})
}