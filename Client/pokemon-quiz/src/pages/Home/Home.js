import React, { useState, useEffect } from "react";
import {
  fetchAllPokemon,
  fetchAllPokemonLocal,
} from "../../apiUtils/apiUtils.mjs";
import PokeCard from "../../components/PokeCard/Poke-Card";
import PokeDisplay from "../../components/PokeDisplay/Poke-Display";
import "./home.scss";
import PokeInfo from "../../components/PokeInfo/Poke-Input-Info";
import Jukebox from "../../components/Jukebox/Jukebox";

const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [localPokemonData, setLocalPokemonData] = useState(null);

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

  useEffect(() => {
    const getAllPokemonLocal = async () => {
      try {
        const { data } = await fetchAllPokemonLocal();
        setLocalPokemonData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemonLocal();
  }, []);

  return (
    <>
      <main className="main">
        <PokeDisplay />
        {localPokemonData && <PokeInfo localdata={localPokemonData} />}
      </main>
      {pokemonData && <PokeCard data={pokemonData} />}
      <Jukebox />
    </>
  );
};

export default Home;
