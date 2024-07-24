import { getPokemonDetails } from "../../services";
import { useQuery } from "react-query";

export const usePokemonDetails = (id: number) => {
  return useQuery(["pokemonDetails", id], () => getPokemonDetails(id));
};
