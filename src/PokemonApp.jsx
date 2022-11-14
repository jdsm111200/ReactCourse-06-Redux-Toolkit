import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, page, loading } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    const res = dispatch(getPokemon());
    return () => {};
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}

      <button onClick={() => dispatch(getPokemon(page + 1))} disabled={loading}>
        Next
      </button>
    </>
  );
};
