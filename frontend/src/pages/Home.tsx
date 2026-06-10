import {
    useEffect,
    useState
} from "react";

import {
    toast

} from "react-hot-toast";

import Pagination
    from "../components/Pagination";

import SearchBar
    from "../components/SearchBar";

import Loader
    from "../components/Loader";

import MovieCard
    from "../components/MovieCard";

import {
    useDebounce
} from "../hooks/useDebounce";

import {
    useAppDispatch,
    useAppSelector
} from "../hooks/redux";

import Navbar
    from "../components/Navbar";

import {
    searchMovies
} from "../store/slices/movie.slice";

import { addFavorite, removeFavorite, fetchFavorites } from "../store/slices/favorite.slice";

import type { Movie } from "../types/movie";


function Home() {

    const dispatch =
        useAppDispatch();



    const {
        movies,
        loading,
        totalResults,
        currentPage,
        query: savedQuery,
    } = useAppSelector(
        (state) =>
            state.movies
    );
    const [
        query,
        setQuery
    ] = useState(savedQuery || "");

    const debouncedQuery =
        useDebounce(query);



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

    useEffect(() => {

        if (
            debouncedQuery
                .trim()
        ) {

            dispatch(
                searchMovies({
                    query:
                        debouncedQuery,

                    page: 1
                })
            );
        }

    }, [
        debouncedQuery,
        dispatch
    ]);

    const handleFavorite =
async (
  movie: Movie
) => {

  const favoriteIds =
    new Set(
      favorites.map(
        (fav) =>
          fav.imdbID
      )
    );

  const isFavorite =
    favoriteIds.has(
      movie.imdbID
    );

  try {

    if (
      isFavorite
    ) {

      await dispatch(
        removeFavorite(
          movie.imdbID
        )
      );

      toast.success(
        `${movie.Title} removed from favorites`
      );

    } else {

      await dispatch(
        addFavorite(
          movie
        )
      );

      toast.success(
        `${movie.Title} added to favorites`
      );
    }

  } catch {

    toast.error(
      "Something went wrong"
    );
  }
};

    const handlePageChange = (page: number) => {
        dispatch(searchMovies({ query: savedQuery, page }))
    }

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
                    marginBottom:
                        "28px"
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
                    🎬 Discover Movies
                </h1>

                <p
                    style={{
                        color:
                            "#6b7280",

                        fontSize:
                            "16px"
                    }}
                >
                    Search and save your favorite movies
                </p>
            </div>

            <SearchBar
                value={query}
                onChange={
                    setQuery
                }
            />

            {loading ? (
                <Loader />
            ) : movies.length > 0 ? (
                <>
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
                        {movies.map(
                            (movie) => {

                                const isFavorite =
                                    favorites.some(
                                        (fav) =>
                                            fav.imdbID ===
                                            movie.imdbID
                                    );

                                return (
                                    <MovieCard
                                        key={
                                            movie.imdbID
                                        }

                                        movie={
                                            movie
                                        }

                                        isFavorite={
                                            isFavorite
                                        }

                                        onToggleFavorite={
                                            handleFavorite
                                        }
                                    />
                                );
                            }
                        )}
                    </div>

                    <Pagination
                        currentPage={
                            currentPage
                        }
                        totalPages={
                            Math.ceil(
                                totalResults / 20
                            )
                        }
                        onPageChange={
                            handlePageChange
                        }
                    />
                </>
            ) : (
                query.trim() && (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "100px 20px",
                            color: "#6b7280"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "32px",
                                marginBottom: "12px"
                            }}
                        >
                            🎬 No movies found
                        </h2>

                        <p
                            style={{
                                fontSize: "18px"
                            }}
                        >
                            Try searching another movie
                        </p>
                    </div>
                )
            )}

        </div>
    );
}

export default Home;