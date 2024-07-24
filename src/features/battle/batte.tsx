import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { usePokemonID } from "../../hooks/pokemon/usePokemon";

const Battle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: pokemonData, isLoading, error } = usePokemonID(Number(id));

  const imgurl = `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const battleimgurl = `https://pokemonrevolution.net/forum/uploads/monthly_2021_03/DVMT-6OXcAE2rZY.jpg.afab972f972bd7fbd4253bc7aa1cf27f.jpg`;

  const handleCatch = () => {
    const capturedPokemon = {
      id: pokemonData?.id,
      name: pokemonData?.name,
      imgurl: `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData?.id}.gif`,
    };

    const capturedPokemons = JSON.parse(localStorage.getItem("capturedPokemons") || "[]");
    capturedPokemons.push(capturedPokemon);
    localStorage.setItem("capturedPokemons", JSON.stringify(capturedPokemons));
    navigate("/seemypokemong");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon details</div>;
  if (!pokemonData) return <div>No Pokémon data found</div>;

  return (
    <div className="flex flex-col fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center p-20" style={{ backgroundImage: `url(${battleimgurl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="relative rounded-md ">
        <img className="rounded-md  w-40" src={imgurl} alt={pokemonData.name} />
        <h1 className="text-4xl font-bold">{pokemonData.name}</h1>
      </div>
      <div className="flex flex-col ">
        <button onClick={handleCatch} className="px-4 py-2 bg-black text-white rounded mt-4">
          Catch
        </button>
      </div>
    </div>
  );
};

export default Battle;
