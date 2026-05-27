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
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "40px 24px"
    }}
  >
    <Navbar />

    <div
      style={{
        marginBottom: "30px"
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#111827",
          marginBottom: "8px"
        }}
      >
        ❤️ Your Favorites
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "16px"
        }}
      >
        All the movies you saved
      </p>
    </div>

    {favorites.length === 0 ? (
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          color: "#6b7280"
        }}
      >
        <h2>
          ❤️ No favorites yet
        </h2>

        <p>
          Start adding movies
          to your favorites list
        </p>
      </div>
    ) : (
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fill, minmax(240px, 260px))",

          justifyContent:
            "center",

          gap: "20px"
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
    )}
  </div>
);
}

export default
Favorites;