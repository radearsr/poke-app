import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./users/user.slice";
import { pokemonReducer } from "./pokemon/pokemon.slice";
import { favoriteReducer } from "./favorites/favorite.slice";

export const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});
