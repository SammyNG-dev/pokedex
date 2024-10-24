interface PokemonProps {
  pokemonList: (
    | {
        name: string;
        imgSrc: string;
      }
    | {
        name: string;
        imgSrc?: undefined;
      }
  )[];
  pokemonIndex: number;
  setPokemonIndex: React.Dispatch<React.SetStateAction<number>>;
}

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }: PokemonProps) {
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <>
      <button type="button" onClick={handleClickPrevious}>
        Précédent
      </button>
      <button type="button" onClick={handleClickNext}>
        Suivant
      </button>
    </>
  );
}

export default NavBar;
