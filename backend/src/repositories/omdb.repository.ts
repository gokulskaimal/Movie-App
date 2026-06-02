import { ENV } from "../config/env";
import { IOMDBRepository , MovieSearchResult , MovieDetails} from "./interfaces/IOMDBRepository";
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

    async getMovieDetails(imdbID : string) : Promise<MovieDetails>{
        try{
            const response = await omdbAxios.get(
                "/",
                {
                    params : {
                        apiKey : ENV.OMDB_API_KEY,
                        i:imdbID
                    }
                }
            )
            const data = response.data

            if(data.Response === 'False'){
                throw new ApiError(HTTP_STATUS.NOT_FOUND, "Movie Not Found")
            }
            return data
        }catch{
            throw new ApiError(HTTP_STATUS.NOT_FOUND, "Failed to fetch movie details")
        }
    }
}