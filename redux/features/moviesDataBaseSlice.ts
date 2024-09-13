import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieProps } from "@/types/model";

interface MoviesState {
  movies: MovieProps[];
  searchQuery: string;
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  movies: [],
  searchQuery: "",
  status: "idle",
};

const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieProps[]>) => {
      state.movies = action.payload;
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
  },
});

export const { setMovies, setLoading, setError, setSearchQuery } =
  moviesDataSlice.actions;

export default moviesDataSlice.reducer;
