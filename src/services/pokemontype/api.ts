import API from "../axiosWithConfig";
import { ResponseType } from "./type";

const getFilterPokemonType = async () => {
  try {
    const response = await API.get(`/type`);
    return response.data as ResponseType;
  } catch (error) {
    console.log(error);
  }
};

const getPokemonByType = async (type: string) => {
  const response = await API.get(`/type/${type}`);
  return response.data;
};
export { getFilterPokemonType , getPokemonByType};

