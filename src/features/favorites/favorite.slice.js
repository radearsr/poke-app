import { createSlice } from "@reduxjs/toolkit";

const FAVORITE_INITIAL_STATE = {
  lists: [],
};

const addOrDelFavorite = (pokeFavorite, pokeToAdd) => {
  const existingFavorite = pokeFavorite.find((favorite) => favorite.pokeId === pokeToAdd.pokeId);
  if (existingFavorite) {
    return pokeFavorite.filter((favorite) => favorite.pokeId !== pokeToAdd.pokeId);
  }
  return [...pokeFavorite, { ...pokeToAdd }];
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: FAVORITE_INITIAL_STATE,
  reducers: {
    setFavoriteLists: (state, action) => {
      state.lists = addOrDelFavorite(state.lists, action.payload);
    }
  }
});

export const { setFavoriteLists } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
