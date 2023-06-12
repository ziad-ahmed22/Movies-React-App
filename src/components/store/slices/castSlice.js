import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_KEY } from "../../URL";

export const fetchMovieCast = createAsyncThunk(
  "castSlice/fetchMovieCast",
  async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits${MY_KEY}`
    );
    return res.data.cast;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const castSlice = createSlice({
  initialState,
  name: "castSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCast.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieCast.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovieCast.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default castSlice.reducer;
