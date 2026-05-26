import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/slices/movie.slice";
import favoriteReducer from "../store/slices/favorite.slice";


export const store = configureStore({
    reducer : {
        movies : movieReducer,
        favorites : favoriteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch