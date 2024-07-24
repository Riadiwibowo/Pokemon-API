import { useNavigate } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/pokemon/usePokemonDetails";
import { usePokemonID } from "../../hooks/pokemon/usePokemon";

interface Props {
  id: number;
  onClose: () => void;
}
const PokemonDetail = (props: Props) => {
  const navigate = useNavigate();
  const { id, onClose } = props;

  const { data: pokemonListData } = usePokemonID(id);
  const { data: detailedPokemonData, isLoading, error } = usePokemonDetails(id);

  const imgurl = `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const handleBattleClick = () => {
    navigate(`/battle/${id}`);
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!pokemonListData) return <div>No Pokemon details found</div>;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-5 rounded-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-2">
          Close
        </button>
        <div className="flex flex-row items-center">
          <img className="rounded-md w-40" src={imgurl} />
          <div className="flex flex-col pl-5">
            <h1 className="text-4xl font-bold">
              #{detailedPokemonData?.id} - {detailedPokemonData?.name}
            </h1>
            <p>Habitat : {detailedPokemonData?.habitat.name}</p>
            <p>Capture Rate : {detailedPokemonData?.capture_rate}%</p>
            <p>Base Happines : {detailedPokemonData?.base_happiness}</p>
            <p>Growth Rate : {detailedPokemonData?.growth_rate.name}</p>
            <p>Generation : {detailedPokemonData?.generation.name}</p>
            <p>Types : {pokemonListData?.types.map((type) => type.type.name).join(" || ")}</p>
            <p>Weight : {pokemonListData?.weight}</p>
            <p>Height : {pokemonListData?.height}</p>
            <button onClick={handleBattleClick} className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
              Battle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
