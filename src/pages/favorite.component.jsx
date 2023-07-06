import { useContext } from "react";
import { FavoriteContext } from "../context/favorite.context";
import { UserContext } from "../context/users.context";
import PokeCard from "../components/poke-card/poke-card.component";

const Favorite = () => {
  const { favoriteLists } = useContext(FavoriteContext);
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <h1 className="text-5xl text-center font-bold py-4 text-cs-dark-warm tracking-wide drop-shadow-text">My Favorite Pokemon</h1>
      <div className="flex flex-row flex-wrap justify-evenly px-8">
        {
          favoriteLists.map((pokemon) => (
            <PokeCard
              key={pokemon.pokeId}
              pokemon={pokemon}
              isLogin={currentUser}
              favoritePokemon={favoriteLists}
            />
          ))
        }
      </div>
    </>
  );
};

export default Favorite;