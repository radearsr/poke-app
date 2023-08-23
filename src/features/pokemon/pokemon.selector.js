import { createSelector } from "reselect";
export const selectPokemonReducer = (state) => (state.pokemon);

export const selectPokemons = createSelector(
  [selectPokemonReducer],
  (pokemonSlice) => pokemonSlice.lists,
);

export const selectFetchLoading = (state) => (state.pokemon.loading);
export const selectFetchErrror = (state) => (state.pokemon.error);
