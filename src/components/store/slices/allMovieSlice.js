import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MOVIES_URL } from "./../../URL";
import axios from "axios";

export const fetchAllMovies = createAsyncThunk(
  "allMoviesSlice/fetchAllMovies",
  async (num) => {
    const res = await axios.get(`${MOVIES_URL}&page=${num}`);
    return res.data;
  }
);

const initialState = {
  data: [],
  total_pages: 0,
  loading: false,
  error: "",
};

const allMoviesSlice = createSlice({
  initialState,
  name: "allMoviesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
      state.total_pages = action.payload.total_pages;
    });
    builder.addCase(fetchAllMovies.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default allMoviesSlice.reducer;
