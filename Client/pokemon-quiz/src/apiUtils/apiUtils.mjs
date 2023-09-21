import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/generation/2";

const fetchAllPokemon = async () => {
  return axios.get(`${API_URL}`);
};

export { fetchAllPokemon };
