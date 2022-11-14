import { pokemonApi } from "../../../api/pokemonApi";
import { loadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemon = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(loadingPokemons());
    const { data } = await pokemonApi.get(`?limit=20&offset=${page * 20}`);
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
