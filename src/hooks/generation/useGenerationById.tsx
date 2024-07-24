import { getGenerationPokemon } from "../../services";
import { useQuery } from "react-query";

export const useGenerationById = (id: number) => {
  return useQuery(["generationPokemon", id], () => getGenerationPokemon(id));
};

