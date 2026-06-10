import { Request , Response , NextFunction } from "express";
import { MESSAGES } from "../constants/messages";
import { HTTP_STATUS } from "../constants/http-status";
import { successResponse } from "../utils/response";
import { IFavoriteService } from "../services/interfaces/IFavoriteService";

export class FavoriteController{
    constructor(private _favoriteService: IFavoriteService) {}

    getFavorites = async (req : Request , res : Response , next : NextFunction) => {
        try{
            const favorites = await this._favoriteService.getFavorites(req.guestId)
            return successResponse(res , favorites , MESSAGES.FAVORITES_FETCHED)
        }catch(err){
            next(err)
        }
    }

    addFavorite = async (req : Request , res : Response  , next : NextFunction) => {
        try{
            await this._favoriteService.addFavorite(req.guestId , req.body)
            return successResponse(res , null , MESSAGES.FAVORITE_ADDED , HTTP_STATUS.CREATED)
        }catch(err){
            next(err)
        }
    }
    
    removeFavorite = async (req : Request , res : Response , next : NextFunction) => {
        try{
            await this._favoriteService.removeFavorite(req.guestId , req.params.imdbID as string)
            return successResponse(res , null , MESSAGES.FAVORITE_REMOVED)
        }catch(err){
            next(err)
        }
    }
}