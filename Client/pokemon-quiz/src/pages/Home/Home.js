import React from "react";
import PokeCard from "../../components/PokeCard/Poke-Card";
import PokeDisplay from "../../components/PokeDisplay/Poke-Display";
import "./home.scss";

const Home = () => {
  return (
    <>
      <PokeDisplay />
      <PokeCard />
    </>
  );
};

export default Home;
