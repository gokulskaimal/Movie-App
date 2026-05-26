import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  favoriteService
} from "../../services/favorite.service";

import type { Movie } from "../../types/movie";

interface FavoriteState {
  favorites: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState:
FavoriteState = {
  favorites: [],
  loading: false,
  error: null
};

export const fetchFavorites =
  createAsyncThunk(
    "favorites/fetch",

    async (
      _,
      thunkAPI
    ) => {
      try {

        const favorites =
          await favoriteService
            .getFavorites();

        return favorites
          .filter(Boolean);

      } catch (
        error:unknown
      ) {

        return thunkAPI
          .rejectWithValue(error instanceof Error ? error.message : "Failed to fetch favorites");
      }
    }
  );

export const addFavorite =
  createAsyncThunk(
    "favorites/add",

    async (
      movie: Movie,
      thunkAPI
    ) => {
      try {

        await favoriteService
          .addFavorite(
            movie
          );

        return movie;

      } catch (
        error: unknown
      ) {

        return thunkAPI
          .rejectWithValue(error instanceof Error ?  error.message : "Failed to add favorite");
      }
    }
  );

export const removeFavorite =
  createAsyncThunk(
    "favorites/remove",

    async (
      imdbID: string,
      thunkAPI
    ) => {
      try {

        await favoriteService
          .removeFavorite(
            imdbID
          );

        return imdbID;

      } catch (
        error: unknown
      ) {

        return thunkAPI
          .rejectWithValue(error instanceof Error ? error.message : "Failed to remove favorite");
      }
    }
  );

const favoriteSlice =
  createSlice({
    name: "favorites",

    initialState,

    reducers: {},

    extraReducers:
    (builder) => {

      builder

        .addCase(
          fetchFavorites.fulfilled,

          (
            state,
            action
          ) => {

            state.favorites =
              action.payload
                ?.filter(
                  Boolean
                ) || [];
          }
        )

        .addCase(
          addFavorite.fulfilled,

          (
            state,
            action
          ) => {

            if (
              !action.payload
            ) {
              return;
            }

            const exists =
              state.favorites
                .some(
                  (movie) =>
                    movie?.imdbID ===
                    action.payload
                      .imdbID
                );

            if (
              !exists
            ) {

              state.favorites
                .push(
                  action.payload
                );
            }
          }
        )

        .addCase(
          removeFavorite
            .fulfilled,

          (
            state,
            action
          ) => {

            state.favorites =
              state.favorites
                .filter(
                  (movie) =>
                    movie &&
                    movie.imdbID !==
                    action.payload
                );
          }
        );
    }
  });

export default
favoriteSlice.reducer;