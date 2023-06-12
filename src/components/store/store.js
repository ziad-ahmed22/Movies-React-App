import { configureStore } from "@reduxjs/toolkit";
import allMoviesReducer from "./slices/allMovieSlice";
import topRatedSlice from "./slices/topRatedSlice";
import searchSlice from "./slices/searchSlice";
import detailsSlice from "./slices/detailsSlice";
import castSlice from "./slices/castSlice";
import similarSlice from "./slices/similarSlice";
import loveSlice from "./slices/loveSlice";

export const store = configureStore({
  reducer: {
    topRated: topRatedSlice,
    allMovies: allMoviesReducer,
    search: searchSlice,
    details: detailsSlice,
    cast: castSlice,
    similar: similarSlice,
    love: loveSlice,
  },
});
