import {
  FaHeart,
  FaRegHeart
} from "react-icons/fa";

import type {
  Movie
} from "../types/movie";

interface Props {
  movie: Movie;
  isFavorite: boolean;

  onToggleFavorite:
  (
    movie: Movie
  ) => void;
}

function MovieCard({
  movie,
  isFavorite,
  onToggleFavorite
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "pointer"
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px)";

        e.currentTarget.style.boxShadow =
          "0 18px 40px rgba(0,0,0,0.15)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";

        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.08)";
      }}
    >
      <div
        style={{
          position:
            "relative"
        }}
      >
        <img
          src={
            movie.Poster !==
              "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }

          alt={
            movie.Title
          }

          style={{
            width: "100%",
            height: "360px",
            objectFit: "cover"
          }}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie);
          }}

          style={{
            position:
              "absolute",

            top:
              "12px",

            right:
              "12px",

            width:
              "38px",

            height:
              "38px",

            border:
              "none",

            borderRadius:
              "50%",

            background:
              "rgba(255,255,255,0.95)",

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            cursor:
              "pointer",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.12)"
          }}
        >
          {isFavorite ? (
            <FaHeart
              size={18}
              color="#ef4444"
            />
          ) : (
            <FaRegHeart
              size={18}
              color="#374151"
            />
          )}
        </button>
      </div>

      <div
        style={{
          padding: "18px"
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            margin: "0 0 10px",
            lineHeight: "1.4"
          }}
        >
          {movie.Title}
        </h3>

        <p
          style={{
            color: "#666",
            margin: 0
          }}
        >
          {movie.Year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;