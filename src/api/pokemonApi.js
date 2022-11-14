import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const pokemonApi = axios.create({
  baseURL: baseUrl,
});
