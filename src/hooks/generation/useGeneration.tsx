import { getNavbarGenerations } from "../../services/generations";
import { useQuery } from "react-query";

export const useGenerations = () => {
  return useQuery("generations", getNavbarGenerations);
};
