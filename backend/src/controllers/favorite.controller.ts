import { Request , Response , NextFunction } from "express";
import { favoriteService } from "../config/dependencies";
import { MESSAGES } from "../constants/messages";
import { HTTP_STATUS } from "../constants/http-status";
import { successResponse } from "../utils/response";

export class FavoriteController{
    getFavorites = async (req : Request , res : Response , next : NextFunction) => {
        try{
            const favorites = await favoriteService.getFavorites(req.guestId)
            return successResponse(res , favorites , MESSAGES.FAVORITES_FETCHED)
        }catch(err){
            next(err)
        }
    }

    addFavorite = async (req : Request , res : Response  , next : NextFunction) => {
        try{
            await favoriteService.addFavorite(req.guestId , req.body)
            return successResponse(res , null , MESSAGES.FAVORITE_ADDED , HTTP_STATUS.CREATED)
        }catch(err){
            next(err)
        }
    }
    
    removeFavorite = async (req : Request , res : Response , next : NextFunction) => {
        try{
            await favoriteService.removeFavorite(req.guestId , req.params.imdbID as string)
            return successResponse(res , null , MESSAGES.FAVORITE_REMOVED)
        }catch(err){
            next(err)
        }
    }
}