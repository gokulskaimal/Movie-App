import { Request, Response, NextFunction } from "express";
import { movieService } from "../config/dependencies";
import { successResponse } from "../utils/response";
import { MESSAGES } from "../constants/messages";

export class MovieController {
    searchMovies = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await movieService.searchMovies({ query: req.query.query as string, page: Number(req.query.page) || 1 })
            return successResponse(res, result, MESSAGES.MOVIES_FETCHED)
        } catch (err) {
            next(err)
        }
    }

    getMoviesDetails = async(req : Request , res : Response , next : NextFunction) =>{
        try{
            const movie = await movieService.getMovieDetails(req.params.imdbID as string)
            return successResponse(res , movie , "Movie details Fetched")
        }catch(err){
            next(err)
        }
    }
}