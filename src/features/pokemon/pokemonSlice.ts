import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  name: string;
  abilities: Array<any>;
  id: number;
  sprites: any;
}

const initialState: PokemonState = {
  name: "",
  abilities: [],
  id: 0,
  sprites: {},
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonState>) => {
      state = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
