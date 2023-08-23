import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/users/user.selector";
import { selectFavorite } from "../features/favorites/favorite.selector";
import PokeCard from "../components/poke-card/poke-card.component";

const Favorite = () => {
  const favoriteLists = useSelector(selectFavorite);
  const currentUser = useSelector(selectCurrentUser);

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