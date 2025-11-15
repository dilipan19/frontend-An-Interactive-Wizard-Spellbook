import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  searchText: string;
  sortBy: string; // "alphabetical" | "power" | "element" | "difficulty" | ""
  showSteps: boolean;
};

const initialState: UIState = {
  searchText: "",
  sortBy: "",
  showSteps: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },

    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },

    toggleShowSteps: (state) => {
      state.showSteps = !state.showSteps;
    },

    resetUI: (state) => {
      state.searchText = "";
      state.sortBy = "";
      state.showSteps = false;
    },
  },
});

export const { setSearchText, setSortBy, toggleShowSteps, resetUI } =
  uiSlice.actions;

export default uiSlice.reducer;
