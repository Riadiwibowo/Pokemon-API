type ResponsePokemonSpecies = {
  count: number;
  next: string;
  previous: string;
  results: PokemonSpecies[];
};

type PokemonSpecies = {
  id: number;
  name: string;
  hatch_counter: number;
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species: EvolvesFromSpecies;
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  height: number;
  names: Name[];
  order: number;
  pokedex_numbers: PokedexNumber[];
  results: Pokemon[];
  url: string;
};

type Pokemon = {
  name: string;
  url: string;
};

type Color = {
  name: string;
  url: string;
};

type EggGroup = {
  name: string;
  url: string;
};

type EvolutionChain = {
  url: string;
};
type EvolvesFromSpecies = {
  name: string;
  url: string;
};

type Generation = {
  name: string;
  url: string;
};

type GrowthRate = {
  name: string;
  url: string;
};

type Habitat = {
  name: string;
  url: string;
};

type Name = {
  language: Language3;
  name: string;
};

type Language3 = {
  name: string;
  url: string;
};

type PokedexNumber = {
  entry_number: number;
  pokedex: Pokedex;
};

type Pokedex = {
  name: string;
  url: string;
};


export type { ResponsePokemonSpecies, Pokemon, PokemonSpecies };
