import { getAllPokemon, getPokemonID } from "../../services";

import { useQuery } from "react-query";

export const usePokemon = (offset: string) => {
  return useQuery(["offset", offset], () => getAllPokemon(offset));
};

export const usePokemonID = (id: number) => {
  return useQuery(["pokemonID", id], () => getPokemonID(id));
};
