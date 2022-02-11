import PokemonLogo from "../PokemonLogo.png";
export default function NavBar({
  handleSearchChange,
  handleSearchClick,
  showTeam,
  toggleRightBarMode,
}) {
  return (
    <nav className="navbar row">
      <img className="logo" src={PokemonLogo} alt="pokemon logo" />
      <form>
        <input
          id="search-bar"
          type="text"
          onChange={handleSearchChange}
        ></input>
        <button onClick={handleSearchClick}>SEARCH</button>
      </form>
      <div className="row nav-buttons">
        {showTeam ? (
          <button
            className="nav-button history-button"
            onClick={toggleRightBarMode}
          >
            SEARCH HISTORY
          </button>
        ) : (
          <button
            className="nav-button team-button"
            onClick={toggleRightBarMode}
          >
            MY TEAM
          </button>
        )}
      </div>
    </nav>
  );
}
