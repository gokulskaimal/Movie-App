import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieService } from "../../services/movie.service";
import type { Movie } from "../../types/moive";

interface MovieState {
    movies: Movie[]
    loading: boolean
    error: string | null
    currentPage: number
    totalResults: number
    query:string

}

const initialState: MovieState = {
    movies: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalResults: 0,
    query: ''
}

export const searchMovies = createAsyncThunk('movies/search', async ({ query, page }: { query: string, page: number }) => {
    const response = await movieService.searchMovies(query, page)

    return response
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchMovies.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(searchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload.movies
            state.totalResults = Number(action.payload.totalResults)
            state.currentPage = action.meta.arg.page
            state.query = action.meta.arg.query
        })
        .addCase(searchMovies.rejected ,(state , action) => {
            state.loading = false
            state.error = action.error.message || "Failed to fetch movies"
        })
    }
})

export const {setPage} = movieSlice.actions
export default movieSlice.reducer