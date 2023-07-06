const ButtonFavorite = ({ pokemon, favoritePoke, favoriteHandler }) => {
  const isFavorite = favoritePoke.find((favorite) => favorite.pokeId === pokemon.pokeId);
  const bgImage = isFavorite ? "url('./heart-full.png')" : "url('./heart.png')"; 
  return (
    <button 
      className="absolute top-0 right-0 w-8 h-8 m-1"
      onClick={() => favoriteHandler(pokemon)}
      style={{ backgroundImage: bgImage, backgroundSize: "contain" }}
    ></button>
  );
};

export default ButtonFavorite;