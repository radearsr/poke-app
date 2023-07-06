import { createContext, useState } from "react";


const addOrDelFavorite = (pokeFavorite, pokeToAdd) => {
  const existingFavorite = pokeFavorite.find((favorite) => favorite.pokeId === pokeToAdd.pokeId);
  if (existingFavorite) {
    return pokeFavorite.filter((favorite) => favorite.pokeId !== pokeToAdd.pokeId);
  }
  return [...pokeFavorite, { ...pokeToAdd }];
} 

export const FavoriteContext = createContext({
  favoriteLists: null,
  setFavoriteLists: () => null,
});

export const FavoriteProvider = ({ children }) => {
 const [favoriteLists, setFavoriteLists] = useState([]);

 const addOrDelPokeToFavoriteList = (pokeToAdd) => {
  setFavoriteLists(addOrDelFavorite(favoriteLists, pokeToAdd));
 };

 const value = { favoriteLists, setFavoriteLists, addOrDelPokeToFavoriteList };
 return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
