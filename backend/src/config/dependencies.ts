import { OMDBRepository } from "../repositories/omdb.repository";
import { FavoritesRepository } from "../repositories/favorite.repository";
import { MovieService } from "../services/movie.service";
import { FavoriteService } from "../services/favorite.service";

const movieRepository = new OMDBRepository()

const favoriteRepository = new FavoritesRepository()

export const movieService = new MovieService(movieRepository)

export const favoriteService = new FavoriteService(favoriteRepository)