import { FavouriteMovieDTO } from "../dto/favorite-movie.dto";
import { IFavoriteRepository } from "../repositories/interfaces/IFavoriteRepository";

export class FavoriteService{
    constructor(private _favoriteRepo : IFavoriteRepository){}

    async getFavorites(guestId : string ){
        return this._favoriteRepo.getFavorites(guestId)
    }

    async addFavorite(guestId : string , movie : FavouriteMovieDTO){
        return this._favoriteRepo.addFavorite(guestId ,movie)
    }

    async removeFavorite(guestId : string , imdbID: string){
        return this._favoriteRepo.removeFavorite(guestId , imdbID)
    }
}