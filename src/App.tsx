import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: 0,
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id: 1,
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      id: 2,
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      id: 3,
    },
    {
      name: "mew",
      id: 4,
    },
  ];

  const [pokemonId, setPokemonId] = useState(0);
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonId]} />
      <NavBar pokemonList={pokemonList} setPokemonId={setPokemonId} />
    </div>
  );
}

export default App;
