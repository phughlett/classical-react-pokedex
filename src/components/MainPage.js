export default function MainPage({ lastSearched }) {
  return (
    <div className="main-area column">
      <div className="screen rounded-corners column">
        {!lastSearched ? (
          <div>
            Welcome to the PokéDex <br />
            Search a pokémon to get started
          </div>
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
      <div className="stats rounded-corners"></div>
    </div>
  );
}
