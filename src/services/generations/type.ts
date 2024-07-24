type ResponseGenerations = {
  count: number;
  next: string;
  previous: string;
  abilities: any[];
  id: number;
  name: string;
  results: Generation[];
  pokemon_species: PokemonSpecy[];
  types: Type[];
};

type Generation = {
  name: string;
  url: string;
};

type PokemonSpecy = {
  name: string;
  url: string;
};

type Type = {
  name: string;
  url: string;
};

export type { ResponseGenerations, Generation, PokemonSpecy };
