import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const endpoint = "https://pokeapi.co/api/v2";
const imageEndpoint = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

const POKEMON_INITIAL_STATE = {
  lists: [],
  loading: "false",
  error: null
};

const fetchPokemons = async () => {
  const { data: pokemons } = await axios.get(`${endpoint}/pokemon?limit=40&offset=0`);
  const pokeWithImage = pokemons.results.map((pokemon) => {
    const pokeUrlSplited = pokemon.url.split("/");
    const pokeId = pokeUrlSplited[6];
    return {
      ...pokemon,
      pokeId,
      picture: `${imageEndpoint}/${pokeId}.svg  `
    }
  });
  return pokeWithImage;
}

export const fetchPokemonsAsync = createAsyncThunk("pokemon/fetchPokemons", fetchPokemons);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: POKEMON_INITIAL_STATE,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    });
    builder.addCase(fetchPokemonsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const pokemonReducer = pokemonSlice.reducer;
