import API from "../axiosWithConfig";
import { PokemonSpecies } from "./type";

const getPokemonDetails = async (id: number) => {
  try {
    const response = await API.get(`/pokemon-species/${id}`);
    console.log(response);
    return response.data as PokemonSpecies;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemonDetails };
