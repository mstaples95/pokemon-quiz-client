import React, { useState, useEffect } from "react";
import {
  fetchAllPokemon,
  fetchAllPokemonLocal,
} from "../../apiUtils/apiUtils.mjs";
import PokeCard from "../../components/PokeCard/Poke-Card";
import PokeDisplay from "../../components/PokeDisplay/Poke-Display";
import "./home.scss";
import PokeInfo from "../../components/PokeInfo/Poke-Input-Info";

const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [localPokemonData, setLocalPokemonData] = useState(null);
  const [result, setResult] = useState(null);

  const validateAnswers = () => {
    let UserAnswers = [];
    let ElementList = [
      "Normal",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Ice",
      "Fighting",
      "Poison",
      "Ground",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Ghost",
      "Dragon",
      "Dark",
      "Steel",
      "Fairy",
    ];
    let TypeCount = Array(18).fill(0);
    let selected = document.getElementsByTagName("input");
    // Collects all user answers into UserAnswers
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].type === "radio") {
        if (selected[i].checked) UserAnswers.push(selected[i].value);
      }
    }
    // Counts results of element count
    for (let i = 0; i < UserAnswers.length; i++) {
      if (UserAnswers[i] === "Normal") TypeCount[0]++;
      if (UserAnswers[i] === "Fire") TypeCount[1]++;
      if (UserAnswers[i] === "Water") TypeCount[2]++;
      if (UserAnswers[i] === "Grass") TypeCount[3]++;
      if (UserAnswers[i] === "Electric") TypeCount[4]++;
      if (UserAnswers[i] === "Ice") TypeCount[5]++;
      if (UserAnswers[i] === "Fighting") TypeCount[6]++;
      if (UserAnswers[i] === "Poison") TypeCount[7]++;
      if (UserAnswers[i] === "Ground") TypeCount[8]++;
      if (UserAnswers[i] === "Flying") TypeCount[9]++;
      if (UserAnswers[i] === "Psychic") TypeCount[10]++;
      if (UserAnswers[i] === "Bug") TypeCount[11]++;
      if (UserAnswers[i] === "Rock") TypeCount[12]++;
      if (UserAnswers[i] === "Ghost") TypeCount[13]++;
      if (UserAnswers[i] === "Dragon") TypeCount[14]++;
      if (UserAnswers[i] === "Dark") TypeCount[15]++;
      if (UserAnswers[i] === "Steel") TypeCount[16]++;
      if (UserAnswers[i] === "Fairy") TypeCount[17]++;
    }
    console.log(UserAnswers);
    console.log(TypeCount);
    let pos = 0;
    //Find largest count of element
    for (let i = 0; i < TypeCount.length; i++) {
      if (TypeCount[pos] < TypeCount[i]) pos = i;
    }
    alert(`You are a ${ElementList[pos]} Pokemon!`);
    setResult(ElementList[pos]);
    // toggleRefresh();
  };

  validateAnswers.results = result;

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
        <PokeDisplay results={result} />
        {localPokemonData && (
          <PokeInfo
            localdata={localPokemonData}
            validateAnswers={validateAnswers}
          />
        )}
      </main>
      {pokemonData && <PokeCard data={pokemonData} />}
    </>
  );
};

export default Home;
