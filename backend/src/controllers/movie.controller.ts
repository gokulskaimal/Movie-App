import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/response";
import { MESSAGES } from "../constants/messages";
import { IMovieService } from "../services/interfaces/IMovieService";

export class MovieController {
    constructor(private _movieService: IMovieService) {}

    searchMovies = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this._movieService.searchMovies({ query: req.query.query as string, page: Number(req.query.page) || 1 })
            return successResponse(res, result, MESSAGES.MOVIES_FETCHED)
        } catch (err) {
            next(err)
        }
    }

    getMoviesDetails = async(req : Request , res : Response , next : NextFunction) =>{
        try{
            const movie = await this._movieService.getMovieDetails(req.params.imdbID as string)
            return successResponse(res , movie , "Movie details Fetched")
        }catch(err){
            next(err)
        }
    }
}