import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieProps } from "@/types/model";

interface MoviesState {
  movies: MovieProps[];
  mostPopular: MovieProps | null; // Cambiado a MovieProps | null para un solo objeto
  searchQuery: string;
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  movies: [],
  mostPopular: null,
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

      const topMovies = movies
        .slice()
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3);

      const randomIndex = Math.floor(Math.random() * topMovies.length);

      state.mostPopular = topMovies[randomIndex];
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
