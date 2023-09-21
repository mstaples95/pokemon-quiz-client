import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/generation/2";
const API_URL_LOCAL = "http://localhost:8080";

const fetchAllPokemon = async () => {
  return axios.get(`${API_URL}`);
};

const fetchAllPokemonLocal = async () => {
  return axios.get(`${API_URL_LOCAL}`);
};

export { fetchAllPokemon, fetchAllPokemonLocal };
