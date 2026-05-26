import {
    useEffect,
    useState
} from "react";
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

import type { Movie } from "../types/moive";


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
    console.log(favorites)

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

            const favoriteIds = new Set(favorites.map((fav) => fav.imdbID))
            const isFavorite =
                favoriteIds.has(movie.imdbID)

            if (
                isFavorite
            ) {

                await dispatch(
                    removeFavorite(
                        movie.imdbID
                    )
                );

            } else {

                await dispatch(
                    addFavorite(
                        movie
                    )
                );
            }
        }

    const handlePageChange = (page: number) => {
        dispatch(searchMovies({ query: savedQuery, page }))
    }

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
                Movie Search
            </h1>

            <SearchBar
                value={query}
                onChange={
                    setQuery
                }
            />

            {loading && (
                <Loader />
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
            {movies.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={Math.ceil(totalResults / 10)} onPageChange={handlePageChange} />
            )}
        </div>
    );
}

export default Home;