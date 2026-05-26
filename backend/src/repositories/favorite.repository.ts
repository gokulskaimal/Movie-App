import { FavouriteMovieDTO } from "../dto/favorite-movie.dto";
import { IFavoriteRepository } from "./interfaces/IFavoriteRepository";
import {
  readFavoritesFile,
  writeFavoritesFile
} from "../utils/file-storage";

export class FavoritesRepository
implements IFavoriteRepository {

  async getFavorites(
    guestId: string
  ): Promise<FavouriteMovieDTO[]> {

    const favorites =
      await readFavoritesFile();

    return (
      favorites[
        guestId
      ] || []
    );
  }

  async isFavorite(guestId : string , imdbID : string) : Promise<boolean>{
    const favorites = await this.getFavorites(guestId)

    return favorites.some(movie => movie.imdbID === imdbID)
  }
  async addFavorite(
    guestId: string,
    movie: FavouriteMovieDTO
  ): Promise<void> {

    const favorites =
      await readFavoritesFile();

    if (
      !favorites[
        guestId
      ]
    ) {

      favorites[
        guestId
      ] = [];
    }

    const exists =
      favorites[
        guestId
      ].some(
        (
          favorite
        ) =>
          favorite.imdbID ===
          movie.imdbID
      );

    if (
      exists
    ) {

      throw new Error(
        "Movie already in favorites"
      );
    }

    favorites[
      guestId
    ].push(movie);

    await writeFavoritesFile(
      favorites
    );
  }

  async removeFavorite(
  guestId: string,
  imdbID: string
): Promise<void> {

  const favorites =
    await readFavoritesFile();

  if (
    !favorites[guestId]
  ) {
    return;
  }



  favorites[guestId] =
    favorites[
      guestId
    ].filter(
      (movie) => {

        const movieId =
          String(
            movie.imdbID
          ).trim();

        const targetId =
          String(
            imdbID
          ).trim();

        return (
          movieId !==
          targetId
        );
      }
    );

  await writeFavoritesFile(
    favorites
  );
}
}