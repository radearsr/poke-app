import { useContext } from "react";
import { FavoriteContext } from "../../context/favorite.context";
import ButtonFavorite from "../button-favorite/button-favorite.component";

const PokeCard = ({ isLogin, pokemon, favoritePokemon }) => {
  const { addOrDelPokeToFavoriteList } = useContext(FavoriteContext);
  return (
    <div className="basis-1/4">
      <div className="flex flex-col justify-between items-center p-2 mx-2 mt-5 text-center h-60 rounded border-4 border-cs-orange bg-cs-dark-warm relative">
        <div className="w-36 h-36 flex">
          <img src={pokemon.picture} alt={pokemon.name} width="100%" />
        </div>
        <h1>{`${pokemon.pokeId}. ${pokemon.name.toUpperCase()}`}</h1>
        <div className="more-action">
          <button className="bg-cs-red p-2 rounded text-white">DETAILS</button>
        </div>
        {isLogin ? (
            <ButtonFavorite
              pokemon={pokemon}
              favoritePoke={favoritePokemon}
              favoriteHandler={addOrDelPokeToFavoriteList}
            />
          ) : ("")}
      </div>
    </div>
  );
};

export default PokeCard;
