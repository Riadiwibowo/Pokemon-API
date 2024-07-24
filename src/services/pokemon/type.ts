type ResponsePokemon = {
  count: number;
  next: string;
  previous: string;
  results: PokemonBiasa[];
};
type PokemonBiasa = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokeType[];
  base_experience: number;
  url: string;
};

type PokeType = {
  slot: number;
  type: Type2;
};

type Type2 = {
  name: string;
  url: string;
};
export type { ResponsePokemon, PokemonBiasa, PokeType };
