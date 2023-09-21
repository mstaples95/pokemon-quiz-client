import React, { useState, useEffect } from "react";
import { fetchAllPokemon } from "../../apiUtils/apiUtils.mjs";
import PokeCard from "../../components/PokeCard/Poke-Card";
import PokeDisplay from "../../components/PokeDisplay/Poke-Display";
import "./home.scss";

const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const { data } = await fetchAllPokemon();
        setPokemonData(data.pokemon_species);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemon();
  }, []);

  return (
    <>
      <main className="main">
        <PokeDisplay />
        {pokemonData && <PokeCard data={pokemonData} />}
      </main>
    </>
  );
};

export default Home;
