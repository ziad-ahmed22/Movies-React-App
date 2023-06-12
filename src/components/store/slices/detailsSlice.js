import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_KEY } from "../../URL";

export const fetchMovieDetails = createAsyncThunk(
  "detailsSlice/fetchMovieDetails",
  async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}${MY_KEY}`
    );
    return res.data;
  }
);

const initialState = {
  data: {},
  loading: false,
  error: "",
};

const detailsSlice = createSlice({
  initialState,
  name: "detailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default detailsSlice.reducer;
