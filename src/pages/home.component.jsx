import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonsAsync } from "../features/pokemon/pokemon.slice";
import { selectCurrentUser } from "../features/users/user.selector";
import { selectFavorite } from "../features/favorites/favorite.selector";
import PokeCard from "../components/poke-card/poke-card.component";
import { selectFetchLoading, selectPokemons } from "../features/pokemon/pokemon.selector";

const Home = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const pokemons = useSelector(selectPokemons);
  const favoriteLists = useSelector(selectFavorite);
  const pokeFetchLoading = useSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchPokemonsAsync());
  }, [])

  return (
    <div className="flex flex-row flex-wrap justify-evenly px-8">
      { pokeFetchLoading ? ("Loading") : (
        pokemons.map((pokemon) => (
          <PokeCard
            key={pokemon.pokeId}
            pokemon={pokemon}
            favoritePokemon={favoriteLists}
            isLogin={currentUser}
          />
        ))
      )}
    </div>
  );
};

export default Home;
