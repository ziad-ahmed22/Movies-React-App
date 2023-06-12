import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("love")
  ? JSON.parse(localStorage.getItem("love"))
  : [];

const loveSlice = createSlice({
  initialState,
  name: "loveSlice",
  reducers: {
    addToLove: (state, action) => {
      const movieInArr = state.find((movie) => movie.id === action.payload.id);
      !movieInArr && state.unshift(action.payload);
      localStorage.setItem("love", JSON.stringify(state));
    },
    removeFromLove: (state, action) => {
      const newState = state.filter((movie) => movie.id !== action.payload.id);
      localStorage.setItem("love", JSON.stringify(newState));
      return newState;
    },
    removeAll: (state, action) => {
      localStorage.removeItem("love");
      state.length = 0;
    },
  },
});

export const { addToLove, removeFromLove, removeAll } = loveSlice.actions;
export default loveSlice.reducer;
