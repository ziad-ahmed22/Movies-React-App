import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URL } from "../../URL";

export const fetchSearchMovies = createAsyncThunk(
  "searchSlice/fetchSearchMovies",
  async ({ word, num }) => {
    const res = await axios.get(`${SEARCH_URL}&query=${word}&page=${num}`);
    return res.data;
  }
);

const initialState = {
  data: [],
  total_pages: 0,
  loading: false,
  error: "",
};

const searchSlice = createSlice({
  initialState,
  name: "searchSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
      state.total_pages = action.payload.total_pages;
    });
    builder.addCase(fetchSearchMovies.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
