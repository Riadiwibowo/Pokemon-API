type ResponseType = {
  count: number;
  next: string;
  previous: any;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ResponsePokemonByType = {
  id: number;
  name: string;
  pokemon: Pokemon[];
};
type Pokemon = {
  pokemon: Pokemon2;
  slot: number;
};

type Pokemon2 = {
  name: string;
  url: string;
};

export type { ResponseType, PokemonType, ResponsePokemonByType };
