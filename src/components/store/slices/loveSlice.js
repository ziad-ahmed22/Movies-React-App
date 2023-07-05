import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("love")
  ? JSON.parse(localStorage.getItem("love"))
  : [];

const loveSlice = createSlice({
  initialState,
  name: "loveSlice",
  reducers: {
    handleLove: (state, action) => {
      const movieInArr = state.find((movie) => movie.id === action.payload.id);

      if (!movieInArr) {
        state.unshift(action.payload);
        localStorage.setItem("love", JSON.stringify(state));
      } else {
        const newState = state.filter(
          (movie) => movie.id !== action.payload.id
        );
        localStorage.setItem("love", JSON.stringify(newState));
        return newState;
      }
    },

    removeAll: (state, action) => {
      localStorage.removeItem("love");
      state.length = 0;
    },
  },
});

export const { addToLove, handleLove, removeFromLove, removeAll } =
  loveSlice.actions;
export default loveSlice.reducer;
