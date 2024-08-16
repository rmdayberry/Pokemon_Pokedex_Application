function Pokecard(props) {
  const { id, name, type, base_experience } = props;

  const imgSrc =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png";

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}
