import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
    page: 1,
  },
});

export const moviesApi = createApi({
  reducerPath: "moviesAPI",
  baseQuery: async (args: string) => {
    try {
      const response = await axiosInstance.get(args);
      return { data: response.data.results };
    } catch (error) {
      return { error: (error as Error).message };
    }
  },
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "movie/popular",
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
