import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieProps } from "@/types/model";

interface MoviesState {
  movies: MovieProps[];
  mostPopular: MovieProps[];
  searchQuery: string;
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  movies: [],
  mostPopular: [], // Inicialmente vacío
  searchQuery: "",
  status: "idle",
};

const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieProps[]>) => {
      // Crea una nueva copia del array de películas para evitar mutaciones directas
      const movies = [...action.payload];
      state.movies = movies;

      // Calcula las 3 películas más populares de manera inmutable
      state.mostPopular = movies
        .slice() // Crea una copia del array para evitar mutaciones
        .sort((a, b) => b.popularity - a.popularity) // Ordena por popularidad
        .slice(0, 3); // Toma los primeros 3 elementos
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
