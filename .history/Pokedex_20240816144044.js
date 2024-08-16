function Pokedex(props) {
  const { pokemon, isWinner } = props;

  return (
    <div className={`pokedex ${isWinner ? "winner" : ""}`}>
      <h2>{isWinner ? "THIS HAND WINS!" : "Pokedex"}</h2>
      <div className="pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
