import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import spellsData from "../../data/spells.json";

type Spell = {
  id: string;
  name: string;
  element: string;
  power: number;
  description: string;
};

type State = {
  allSpells: Spell[];
  castHistory: Spell[];
};

const initialState: State = {
  allSpells: spellsData,
  castHistory: [],
};

const spellsSlice = createSlice({
  name: "spells",
  initialState,
  reducers: {
    castSpell: (state, action: PayloadAction<string>) => {
      const spell = state.allSpells.find(s => s.id === action.payload);
      if (spell) state.castHistory.push(spell);
    },
  },
});

export const { castSpell } = spellsSlice.actions;
export default spellsSlice.reducer;
