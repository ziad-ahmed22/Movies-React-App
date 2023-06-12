import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_KEY } from "../../URL";

export const fetchSimilarMovies = createAsyncThunk(
  "similarSlice/fetchSimilarMovies",
  async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar${MY_KEY}&page=${
        Math.floor(Math.random() * 20) + 1
      }`
    );
    return res.data;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const similarSlice = createSlice({
  initialState,
  name: "similarSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSimilarMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSimilarMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
    });
    builder.addCase(fetchSimilarMovies.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default similarSlice.reducer;
