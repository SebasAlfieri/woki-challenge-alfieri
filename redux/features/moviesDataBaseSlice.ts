import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieProps } from "@/types/model";

interface MoviesState {
  movies: MovieProps[];
  savedMovies: MovieProps[];
  searchQuery: string;
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  movies: [],
  savedMovies: [],
  searchQuery: "",
  status: "idle",
};

const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieProps[]>) => {
      const movies = [...action.payload];
      state.movies = movies;
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state) => {
      state.status = "failed";
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveMovie: (state, action: PayloadAction<any>) => {
      // FIX TYPE FIX
      const movieToSave = action.payload;
      if (!state.savedMovies.some((movie) => movie.id === movieToSave.id)) {
        state.savedMovies.push(movieToSave);
        console.log(movieToSave);
      }
    },
    removeSavedMovie: (state, action: PayloadAction<number>) => {
      state.savedMovies = state.savedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  setMovies,
  setLoading,
  setError,
  setSearchQuery,
  saveMovie,
  removeSavedMovie,
} = moviesDataSlice.actions;

export default moviesDataSlice.reducer;
