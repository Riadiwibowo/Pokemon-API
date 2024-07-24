export type PokemonBiasa = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokeType[];
    base_experience: number;
    url: string;
  };
  
  export type PokeType = {
    slot: number;
    type: Type2;
  };
  
  export type Type2 = {
    name: string;
    url: string;
  };
  
  export type ResponsePokemon = {
    count: number;
    next: string;
    previous: string;
    results: PokemonBiasa[];
  };
  
  export type ResponsePokemonByType = {
    id: number;
    name: string;
    pokemon: Pokemon[];
  };
  
  export type Pokemon = {
    pokemon: Pokemon2;
    slot: number;
  };
  
  export type Pokemon2 = {
    name: string;
    url: string;
  };