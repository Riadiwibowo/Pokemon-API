import API from "../axiosWithConfig";
import { ResponseGenerations } from "./type";

const getNavbarGenerations = async () => {
  try {
    const response = await API.get(`/generation`);
    return response.data as ResponseGenerations;
  } catch (error) {
    console.log(error);
  }
};

const getGenerationPokemon = async (id: number) => {
  try {
    const response = await API.get(`/generation/${id}`);
    console.log(response);
    return response.data as ResponseGenerations;
  } catch (error) {
    console.log(error);
  }
};

export { getNavbarGenerations, getGenerationPokemon };
