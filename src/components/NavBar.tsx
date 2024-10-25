interface PokemonProps {
  pokemonList: {
    name: string; //paire clé : type de la valeur avec autant de paires clé : type qu'il y a de propriétés dans l'objets
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
