import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./services/api";
import moviesReducer from "./features/moviesDataBaseSlice";
// import accountReducer from "./features/accountSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    moviesStorage: moviesReducer,
    // account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
