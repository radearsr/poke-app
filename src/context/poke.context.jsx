import axios from "axios";
import { createContext, useEffect, useState } from "react";

const endpoint = "https://pokeapi.co/api/v2";
const imageEndpoint = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

export const PokeContext = createContext({
  pokemons: null,
  setPokemons: () => null,
});

export const PokeProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const { data: pokemons } = await axios.get(`${endpoint}/pokemon?limit=10&offset=0`);
      const pokeWithImage = pokemons.results.map((pokemon) => {
        const pokeUrlSplited = pokemon.url.split("/");
        const pokeId = pokeUrlSplited[6];
        return {
          ...pokemon,
          pokeId,
          picture: `${imageEndpoint}/${pokeId}.svg  `
        }
      });
      setPokemons(pokeWithImage);
    }
    getAllPokemons();
  }, []);

  const value = { pokemons, setPokemons };

  return (
    <PokeContext.Provider value={value}>
      {children}
    </PokeContext.Provider>
  );
};