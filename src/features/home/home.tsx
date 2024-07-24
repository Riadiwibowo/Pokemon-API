import { usePokemonByType, useType } from "../../hooks/category/useType";

import Dropdown from "../../component/dropdown";
import Pagination from "../../component/pagination";
import { PokemonBiasa } from "../../services/pokemon/type";
import PokemonDetail from "../detail/pokemon-detail";
import Pokemoncard from "../../component/pokemon-card";
import { usePagination } from "../../hooks/usePagination";
import { usePokemon } from "../../hooks/pokemon/usePokemon";
import { useState } from "react";

const Home = () => {
  const { offset, currentPage, handlePageChange } = usePagination();
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");

  const { data, isLoading, error } = usePokemon(offset.toString());
  const { data: typesData } = useType();
  const { data: pokemonByTypeData } = usePokemonByType(selectedType);

  const extractIdFromUrl = (url: string): number => {
    const segments = url.split("/");
    return parseInt(segments[segments.length - 2]);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const handleCardClick = (id: number) => {
    setSelectedPokemon(id);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!data) return <div>There are no Pokémon data</div>;

  const filteredPokemon = selectedType && pokemonByTypeData ? data.results.filter((pokemon: any) => pokemonByTypeData.pokemon.some((p: any) => extractIdFromUrl(p.pokemon.url) === extractIdFromUrl(pokemon.url))) : data.results;

  return (
    <div className="flex flex-col min-h-screen">
      <label className="text-center text-5xl font-bold p-5 ">All Pokémong</label>
      <div className="flex justify-around p-5">{typesData && <Dropdown label="Types" options={typesData.results} value={selectedType} onChange={handleTypeChange} />}</div>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {filteredPokemon.length > 0 ? filteredPokemon.map((item: PokemonBiasa) => <Pokemoncard key={item.id} id={extractIdFromUrl(item.url)} name={item.name} onClick={handleCardClick} />) : <div>No Pokémon found</div>}
      </div>
      <div className="flex flex-grow">{selectedPokemon && <PokemonDetail id={selectedPokemon} onClose={handleCloseModal} />}</div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} hasNextPage={Boolean(data.next)} hasPreviousPage={Boolean(data.previous)} />
    </div>
  );
};

export default Home;
