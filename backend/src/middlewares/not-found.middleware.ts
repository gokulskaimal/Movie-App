import { Request , Response } from "express";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/messages";

export const notFoundMiddleware = ( _req : Request , res : Response) =>{
    return res.status(HTTP_STATUS.NOT_FOUND).json({success : false , message : MESSAGES.ROUTE_NOT_FOUND})
}