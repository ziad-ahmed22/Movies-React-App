import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOP_RATED_URL } from "./../../URL";
import axios from "axios";

export const fetchTopRated = createAsyncThunk(
  "topRatedSlice/fetchTopRated",
  async (num) => {
    const res = await axios.get(
      `${TOP_RATED_URL}&page=${Math.floor(Math.random() * 10) + 1}`
    );
    return res.data;
  }
);

const initialState = {
  data: [],
  total_pages: 0,
  loading: false,
  error: "",
};

const topRatedSlice = createSlice({
  initialState,
  name: "topRatedSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRated.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
      state.total_pages = action.payload.total_pages;
    });
    builder.addCase(fetchTopRated.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default topRatedSlice.reducer;
