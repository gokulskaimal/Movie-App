import { Movie } from "../../interfaces/movie.interface";

export interface MovieSearchResult{
    movies : Movie[];
    totalResults : number;
}

export interface MovieDetails extends Movie {

  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  Released: string;
}

export interface IOMDBRepository{
    searchMovies(query : string , page?: number): Promise<MovieSearchResult>
    getMovieDetails(imdbID : string ) : Promise<MovieDetails>
}