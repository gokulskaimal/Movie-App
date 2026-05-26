import { FavouriteMovieDTO } from "../../dto/favorite-movie.dto";

export interface IFavoriteRepository {
    getFavorites(guestId : string) : Promise<FavouriteMovieDTO[]>;
    addFavorite(guestId : string , movie : FavouriteMovieDTO) : Promise<void>;
    removeFavorite(guestId : string , imdbID : string) : Promise<void>
    isFavorite(guestId : string , imdbID : string) : Promise<boolean>
}