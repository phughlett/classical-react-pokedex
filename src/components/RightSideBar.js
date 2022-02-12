import PokemonCard from "./PokemonCard";

export default function RightSideBar({
  showTeam,
  myTeam,
  searchHistory,
  handleRemoveFromTeamClick,
  handleHistoryCardClick,
}) {
  let properHtml = showTeam ? (
    <div className="my-team">
      <h3>MY TEAM</h3>
      {myTeam.map((pokemon, index) => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.name + index}
          isTeamCard={true}
          index={index}
          handleRemoveFromTeamClick={handleRemoveFromTeamClick}
        />
      ))}
    </div>
  ) : (
    <div className="search-history">
      <h3>RECENTLY SEARCHED POKÉMON</h3>
      {searchHistory.map((pokemon, index) => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.name + index}
          index={index}
          handleHistoryCardClick={handleHistoryCardClick}
        />
      ))}
    </div>
  );

  return <div className="right-bar column">{properHtml}</div>;
}
