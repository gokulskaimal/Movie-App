import { SearchMoiveDTO } from "../../dto/search-movie.dto";
import { MovieSearchResult, MovieDetails } from "../../repositories/interfaces/IOMDBRepository";

export interface IMovieService {
    searchMovies(payload: SearchMoiveDTO): Promise<MovieSearchResult>;
    getMovieDetails(imdbID: string): Promise<MovieDetails>;
}
