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
          <h1>Welcome to the PokéDex</h1>
        ) : (
          <div className="search-result">
            <h2>
              {lastSearched.name.toUpperCase()} -{" "}
              {`#${(1000 + parseInt(lastSearched.pokedex_number))
                .toString()
                .slice(1)}`}
            </h2>
            <img
              className="screen-image"
              src={lastSearched.image}
              alt={lastSearched.name}
            />
          </div>
        )}
      </div>
      <br />
      <div className="bottom-box row rounded-corners">
        {error ? (
          <h2>No pokémon found matching "{searchTerm}"</h2>
        ) : lastSearched ? (
          <div className="stats-display row">
            <div className="stat-box">
              <h2>TYPE: {lastSearched.type.toUpperCase()}</h2>
            </div>
            <div className="stat-box">
              <h2>WEIGHT: {lastSearched.weight}</h2>
            </div>

            <div className="stat-box">
              {Object.entries(lastSearched.stats).map(
                ([statName, statValue]) => (
                  <div className="stat-entry" key={statName + statValue}>
                    {statName.toUpperCase()} : {statValue}
                  </div>
                )
              )}
            </div>
            <button onClick={handleAddToTeamClick}>ADD</button>
          </div>
        ) : (
          <h2>Search a pokémon to get started</h2>
        )}
      </div>
    </div>
  );
}
