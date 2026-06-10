import { SearchMoiveDTO } from "../dto/search-movie.dto";
import { IOMDBRepository , MovieSearchResult , MovieDetails} from "../repositories/interfaces/IOMDBRepository";
import { IMovieService } from "./interfaces/IMovieService";

export class MovieService implements IMovieService {
    constructor(private _movieRepo : IOMDBRepository){}

    async searchMovies(payload : SearchMoiveDTO) : Promise<MovieSearchResult>{
        const {query , page = 1 } = payload;

        return this._movieRepo.searchMovies(query , page)
    }
    async getMovieDetails(imdbID : string) : Promise<MovieDetails>{
        return this._movieRepo.getMovieDetails(imdbID)
    }
}
