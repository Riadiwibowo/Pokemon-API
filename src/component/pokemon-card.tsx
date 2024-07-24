interface Props {
  id: number;
  name: string;
  size?: string;
  onClick: (id: number) => void;
}
const Pokemoncard = (props: Props) => {
  const { id, name, size, onClick } = props;
  const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log("Pokemon Card Props:", { id, name, size });
  return (
    <div className={`flex flex-col ${size} `} onClick={() => onClick(id)}>
      <img src={imgurl} alt={name} className="w-40" />
      <label className=" flex justify-center font-semibold">{id}</label>
      <label className=" flex justify-center font-semibold">{name}</label>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default Pokemoncard;
