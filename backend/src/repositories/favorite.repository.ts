import { FavouriteMovieDTO } from "../dto/favorite-movie.dto";
import { IFavoriteRepository } from "./interfaces/IFavoriteRepository";
import { getDb } from "../config/db";

export class FavoritesRepository
  implements IFavoriteRepository {

  async getFavorites(
    guestId: string
  ): Promise<FavouriteMovieDTO[]> {

    const db = await getDb()

    const favorites = await db.all<FavouriteMovieDTO[]>(
      `SELECT imdbID , Title , Year , Poster , Type from favorites where guestId = ?`,
      [guestId]
    )

    return favorites || []
  }

  async isFavorite(guestId: string, imdbID: string): Promise<boolean> {
    const db = await getDb()
    const result = await db.get(
      `SELECT 1 FROM favorites WHERE guestId = ? AND imdbID = ?`,
      [guestId, imdbID]
    )
    return !!result;
  }
  async addFavorite(
    guestId: string,
    movie: FavouriteMovieDTO
  ): Promise<void> {

    const db = await getDb()
    try {
      await db.run(
        `INSERT INTO favorites (guestId , imdbID, Title , Year , Poster , Type) VALUES (?, ?, ?, ?, ?, ?)`,
        [guestId, movie.imdbID, movie.Title, movie.Year, movie.Poster, movie.Type]
      )
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new Error("Movie already in favorites");
      }
      throw error;
    }
  }

  async removeFavorite(
    guestId: string,
    imdbID: string
  ): Promise<void> {
    const db = await getDb()

    await db.run(
      `DELETE FROM favorites WHERE guestId = ? AND imdbID = ?`,
      [guestId , imdbID]
    )

  }
}