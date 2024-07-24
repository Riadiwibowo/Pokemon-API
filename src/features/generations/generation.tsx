import GenerationCard from "../../component/generation-card";
import PokemonDetail from "../detail/pokemon-detail";
import { PokemonSpecy } from "../../services/generations/type";
import { useGenerationById } from "../../hooks/generation/useGenerationById";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Generation = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);

  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGenerationById(parseInt(id!));
  const extractIdFromUrl = (url: string): number => {
    const segments = url.split("/");
    return parseInt(segments[segments.length - 2]);
  };

  const handleCardClick = (id: number) => {
    setSelectedPokemon(id);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!data) return <div>No generation details found</div>;
  return (
    <div className="flex flex-col">
      <label className="text-center text-5xl font-bold p-5">Generation {id}</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {data?.pokemon_species.map((item: PokemonSpecy) => (
          <GenerationCard key={item.name} id={extractIdFromUrl(item.url)} name={item.name} onClick={handleCardClick} />
        ))}
      </div>
      {selectedPokemon && <PokemonDetail id={selectedPokemon} onClose={handleCloseModal} />}
    </div>
  );
};

export default Generation;
