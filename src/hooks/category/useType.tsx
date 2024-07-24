import { getFilterPokemonType, getPokemonByType } from "../../services";

import { useQuery } from "react-query";

export const useType = () => {
  return useQuery("type", getFilterPokemonType);
};

export const usePokemonByType = (type: string) => {
  return useQuery(["pokemonByType", name], () => getPokemonByType(type), {
    enabled: !!type,  // Only fetch data if type is not empty
  });
};