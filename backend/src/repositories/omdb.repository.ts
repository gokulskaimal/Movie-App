import { ENV } from "../config/env";
import { IOMDBRepository , MovieSearchResult } from "./interfaces/IOMDBRepository";
import { omdbAxios } from "../config/axios";
import { OMDBSearchResponse } from "../interfaces/movie.interface";
import { HTTP_STATUS } from "../constants/http-status";
import { ApiError } from "../utils/ApiError";

export class OMDBRepository implements IOMDBRepository{
    async searchMovies(query: string, page?: number): Promise<MovieSearchResult> {
        try{
            const response = await omdbAxios.get<OMDBSearchResponse>('/', {
                params : {
                    apiKey : ENV.OMDB_API_KEY,
                    s: query,
                    page : page || 1
                
                }
            })

            const data = response.data

            if(data.Response === "False"){
                return {
                    movies : [],
                    totalResults : 0
                }
            }
            return {
                movies : data.Search || [],
                totalResults : Number(data.totalResults) || 0
            }
        }catch{
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERORR, "Failed to fetch movies")
        }
    }
}