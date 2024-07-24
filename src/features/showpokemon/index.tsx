import { useEffect, useState } from "react";

const MyPokemong = () => {
  const [capturedPokemons, setCapturedPokemons] = useState<any[]>([]);
  const [editingPokemonId, setEditingPokemonId] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");
  
  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem("capturedPokemons") || "[]");
    setCapturedPokemons(storedPokemons);
  }, []);
  
  const handleEditClick = (id: number, currentName: string) => {
    setEditingPokemonId(id);
    setNewName(currentName);
  };

  const handleSaveClick = (id: number) => {
    const updatedPokemons = capturedPokemons.map((pokemon) => (pokemon.id === id ? { ...pokemon, name: newName } : pokemon));
    localStorage.setItem("capturedPokemons", JSON.stringify(updatedPokemons));
    setCapturedPokemons(updatedPokemons);
    setEditingPokemonId(null);
  };

  const handleCancelClick = () => {
    setEditingPokemonId(null);
  };
  
  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-5">My Captured Pokémon</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {capturedPokemons.length > 0 ? (
          capturedPokemons.map((pokemon) => (
            <div key={pokemon.id} className="bg-white p-4 rounded-lg shadow-md">
              <img className="w-40 rounded-md" src={pokemon.imgurl} alt={pokemon.name} />
              {editingPokemonId === pokemon.id ? (
                <div>
                  <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="border p-1 rounded" />
                  <button onClick={() => handleSaveClick(pokemon.id)} className="px-4 py-2 bg-green-500 text-white rounded mt-2">
                    Save
                  </button>
                  <button onClick={handleCancelClick} className="px-4 py-2 bg-gray-300 text-black rounded mt-2 ml-2">
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold mt-2">{pokemon.name}</h2>
                  <button onClick={() => handleEditClick(pokemon.id, pokemon.name)} className="px-4 py-2 bg-blue-500 text-white rounded mt-2">
                    Edit Name
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No Pokémon captured yet</div>
        )}
      </div>
    </div>
  );
};

export default MyPokemong;
