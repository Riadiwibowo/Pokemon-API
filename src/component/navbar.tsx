import { Link, useNavigate } from "react-router-dom";

import { useGenerations } from "../hooks/generation/useGeneration";
import { useState } from "react";

const Navbar = () => {
  const { data, isLoading, error } = useGenerations();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const generations = data?.results.map((gen) => {
    const genId = parseInt(gen.url.split("/").slice(-2, -1)[0], 10);
    return { id: genId, name: gen.name.replace("generation-", "Generation ") };
  });
  const handleGenerationChange = (genId: number) => {
    navigate(`/generation/${genId}`);
    setIsOpen(false); // Close dropdown after selection
  };

  if (isLoading) return <div>Loading generations...</div>;
  if (error) return <div>Error loading generations</div>;
  return (
    <div className="flex flex-row w-full justify-between pt-3 shadow-md ">
      <h2 className="text-2xl">MyPokémong</h2>
      <div className="flex flex-row gap-5 mr-5">
        <div className="relative flex items-center mr-5 gap-5">
          <Link to={"/"}>Home</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 rounded-lg shadow-lgtransition-colors">
            Generations
          </button>
          {isOpen && (
            <ul className="absolute top-full right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10">
              {generations?.map((gen) => (
                <li key={gen.id} onClick={() => handleGenerationChange(gen.id)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                  {gen.name}
                </li>
              ))}
            </ul>
          )}
          <Link to={"/seemypokemong"}>See My Pokémong</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
