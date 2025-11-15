import { configureStore } from "@reduxjs/toolkit";
import spellsReducer from "./slices/spellsSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    spells: spellsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
