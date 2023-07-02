import { useContext } from "react";
import { PokeContext } from "../context/poke.context";
import { UserContext } from "../context/users.context";

const Home = () => {
  const { pokemons } = useContext(PokeContext);
  const { currentUser } = useContext(UserContext);
  return (
    <div className="flex flex-row flex-wrap justify-evenly px-8 bg-[#FFEEBB]">
      {
        pokemons.map((pokemon) => (
          <div key={pokemon.pokeId} className="basis-1/4">
            <div className="flex flex-col justify-between items-center p-2 mx-2 mt-5 text-center h-60 rounded border-4 bg-[#ffe081] border-[#F86F03]">
              <div className="w-36">
                <img src={pokemon.picture} alt={pokemon.name} width="100%" />
              </div>
              <h1>{`${pokemon.pokeId}. ${pokemon.name.toUpperCase()}`}</h1>
              <div className="more-action">
                <button className="bg-[#F24C3D] p-2 rounded">Details</button>
                {currentUser ? (<button>❤️</button>) : ("")}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
