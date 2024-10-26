interface PokemonProps {
  pokemonList: {
    name: string;
    imgSrc?: string;
    id: number;
  }[];
  setPokemonId: React.Dispatch<React.SetStateAction<number>>;
}

function NavBar({ pokemonList, setPokemonId }: PokemonProps) {
  return (
    <>
      {pokemonList.map((pokemon) => {
        return (
          <button
            key={pokemon.id}
            type="button"
            onClick={() => {
              setPokemonId(pokemon.id);
              pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
            }}
          >
            {pokemon.name}
          </button>
        );
      })}
    </>
  );
}

export default NavBar;
