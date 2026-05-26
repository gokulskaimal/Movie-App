import { Movie } from "../../interfaces/movie.interface";

export interface MovieSearchResult{
    movies : Movie[];
    totalResults : number;
}

export interface IOMDBRepository{
    searchMovies(query : string , page?: number): Promise<MovieSearchResult>
}