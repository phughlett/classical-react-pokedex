export default function PokemonCard({
  pokemon,
  isTeamCard,
  index,
  handleRemoveFromTeamClick,
  handleHistoryCardClick,
}) {
  return (
    <div
      className="pokemon-card rounded-corners column"
      onClick={
        isTeamCard
          ? () => {}
          : () => {
              handleHistoryCardClick(index);
            }
      }
    >
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name}></img>
      <div>
        {isTeamCard ? (
          <button
            onClick={(e) => {
              handleRemoveFromTeamClick(index);
            }}
          >
            ❌
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
