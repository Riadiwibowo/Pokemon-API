import { PokemonBiasa, ResponsePokemon } from "./type";

import API from "../axiosWithConfig";

const getAllPokemon = async (offset: string) => {
  let url = `/pokemon/?limit=24&offset=${offset}`;
  try {
    const response = await API.get(url);
    return response.data as ResponsePokemon;
  } catch (error) {
    console.log(error);
  }
};
const getPokemonID = async (id: number) => {
  try {
    const response = await API.get(`/pokemon/${id}`);
    return response.data as PokemonBiasa;
  } catch (error) {
    console.log(error);
  }
};
export { getAllPokemon, getPokemonID };
