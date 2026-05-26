import {
  useEffect
} from "react";

import MovieCard
from "../components/MovieCard";

import Navbar
from "../components/Navbar";

import {
  useAppDispatch,
  useAppSelector
} from "../hooks/redux";

import {
  fetchFavorites,
  removeFavorite
} from "../store/slices/favorite.slice";

import type {
  Movie
}
from "../types/movie";

function Favorites() {

  const dispatch =
    useAppDispatch();

  const {
    favorites
  } = useAppSelector(
    (state) =>
      state.favorites
  );

  useEffect(() => {

    dispatch(
      fetchFavorites()
    );

  }, [dispatch]);

  const handleRemove =
    async (
      movie: Movie
    ) => {

      await dispatch(
        removeFavorite(
          movie.imdbID
        )
      );
    };

  return (
    <div
      style={{
        maxWidth:
          "1200px",

        margin:
          "40px auto",

        padding:
          "20px"
      }}
    >
      <Navbar />

      <h1>
        Your Favorites
      </h1>

      {!favorites.length && (
        <p>
          No favorites added
          yet.
        </p>
      )}

      <div
        style={{
          display:
            "grid",

          gridTemplateColumns:
            "repeat(auto-fill, minmax(220px, 1fr))",

          gap:
            "20px"
        }}
      >
        {favorites.map(
          (movie) => (
            <MovieCard
              key={
                movie.imdbID
              }

              movie={
                movie
              }

              isFavorite={
                true
              }

              onToggleFavorite={
                handleRemove
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default
Favorites;