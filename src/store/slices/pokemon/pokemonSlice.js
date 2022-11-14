import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadingPokemons: (state) => {
      state.loading = true;
    },
    setPokemons: (state, action) => {
      console.log("action", action);
      state.loading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
  },
});

export const { loadingPokemons, setPokemons } = pokemonSlice.actions;
