import {
  useEffect
} from "react";

import {
  toast
} from "react-hot-toast";

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

      try {

        await dispatch(
          removeFavorite(
            movie.imdbID
          )
        );

        toast.success(
          `${movie.Title} removed from favorites`
        );

      } catch {

        toast.error(
          "Failed to remove movie"
        );
      }
    };

  return (
    <div
      style={{
        maxWidth:
          "1400px",

        margin:
          "0 auto",

        padding:
          "40px 24px"
      }}
    >
      <Navbar />

      <div
        style={{
          marginBottom:
            "30px"
        }}
      >
        <h1
          style={{
            fontSize:
              "42px",

            fontWeight:
              "800",

            color:
              "#111827",

            marginBottom:
              "8px"
          }}
        >
          ❤️ Your Favorites
        </h1>

        <p
          style={{
            color:
              "#6b7280",

            marginTop:
              "-8px",

            marginBottom:
              "30px"
          }}
        >
          Your saved movie collection
        </p>
      </div>

      {favorites.length === 0 ? (
        <div
          style={{
            background:
              "#fff",

            borderRadius:
              "24px",

            padding:
              "40px 24px",

            textAlign:
              "center",

            boxShadow:
              "0 8px 24px rgba(0,0,0,0.08)",

            marginTop:
              "30px",

            minHeight:
              "220px",

            display:
              "flex",

            flexDirection:
              "column",

            justifyContent:
              "center",

            alignItems:
              "center"
          }}
        >
          <div
            style={{
              fontSize:
                "64px",

              marginBottom:
                "16px"
            }}
          >
            ❤️
          </div>

          <h2
            style={{
              marginBottom:
                "12px",

              color:
                "#111827"
            }}
          >
            No Favorites Yet
          </h2>

          <p
            style={{
              color:
                "#6b7280",

              fontSize:
                "16px"
            }}
          >
            Start exploring movies
            and add your favorites
            here.
          </p>
        </div>
      ) : (
        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fill, minmax(240px, 260px))",

            justifyContent:
              "center",

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
      )}
    </div>
  );
}

export default Favorites;