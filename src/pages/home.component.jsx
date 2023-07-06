import { useContext } from "react";
import { PokeContext } from "../context/poke.context";
import { FavoriteContext } from "../context/favorite.context";
import { UserContext } from "../context/users.context";
import PokeCard from "../components/poke-card/poke-card.component";

const Home = () => {
  const { pokemons } = useContext(PokeContext);
  const { currentUser } = useContext(UserContext);
  const { favoriteLists } = useContext(FavoriteContext);

  return (
    <div className="flex flex-row flex-wrap justify-evenly px-8">
      {
        pokemons.map((pokemon) => (
          <PokeCard
            key={pokemon.pokeId}
            pokemon={pokemon}
            favoritePokemon={favoriteLists}
            isLogin={currentUser}
          />
        ))
      }
    </div>
  );
};

export default Home;
