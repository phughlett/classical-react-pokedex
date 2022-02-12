export default function MainPage({
  lastSearched,
  error,
  searchTerm,
  handleAddToTeamClick,
}) {
  return (
    <div className="main-area column">
      <div className="screen rounded-corners column">
        {error ? (
          <div className="error">❌</div>
        ) : !lastSearched ? (
          <h2>Welcome to the PokéDex</h2>
        ) : (
          <div className="search-result">
            <h3>
              {lastSearched.name.toUpperCase()} -{" "}
              {`#${(1000 + parseInt(lastSearched.pokedex_number))
                .toString()
                .slice(1)}`}
            </h3>
            <img
              className="screen-image"
              src={lastSearched.image}
              alt={lastSearched.name}
            />
          </div>
        )}
      </div>
      <br />
      <div className="stats row rounded-corners">
        {error ? (
          <h3>No pokémon found matching "{searchTerm}"</h3>
        ) : lastSearched ? (
          <div className="row">
            <div>TYPE: {lastSearched.type}</div>
            <div>WEIGHT: {lastSearched.weight}</div>

            <div>
              STATS:{" "}
              {Object.entries(lastSearched.stats).map(
                ([statName, statValue]) => (
                  <div key={statName + statValue}>
                    {statName}:{statValue}
                  </div>
                )
              )}
            </div>
            <button onClick={handleAddToTeamClick}>ADD</button>
          </div>
        ) : (
          <h3>Search a pokémon to get started</h3>
        )}
      </div>
    </div>
  );
}
