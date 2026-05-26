import { SearchMoiveDTO } from "../dto/search-movie.dto";
import { IOMDBRepository , MovieSearchResult} from "../repositories/interfaces/IOMDBRepository";

export class MovieService {
    constructor(private _movieRepo : IOMDBRepository){}

    async searchMovies(payload : SearchMoiveDTO) : Promise<MovieSearchResult>{
        const {query , page = 1 } = payload;

        return this._movieRepo.searchMovies(query , page)
    }
}


