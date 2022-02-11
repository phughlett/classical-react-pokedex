import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { randomNumber, formatPokeData } from "./helperFunctions";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import RightSideBar from "./components/RightSideBar";

const url = `https://pokeapi.co/api/v2/pokemon/`; // the base url for searching a pokemon, minus the actual number or name

// Helpers to make fetching cleaner to read:

function fetchPokemonFromSearchTerm(term) {
  return fetch(`${url}${term}`)
    .then((response) => response.json())
    .then(formatPokeData);
}

function fetchRandomPokemon() {
  return fetchPokemonFromSearchTerm(randomNumber(600));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      searchHistory: [],
      myTeam: [],
      showTeam: true,
      error: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.toggleRightBarMode = this.toggleRightBarMode.bind(this);
    // this.___ = this.___.bind(this);
  }
  toggleRightBarMode() {
    let showTeam = !this.state.showTeam;
    this.setState({ showTeam });
  }

  handleSearchClick(e) {
    this.setState({ error: false });

    fetchPokemonFromSearchTerm(this.state.searchTerm)
      .then((pokeData) => {
        let { searchHistory } = this.state;
        searchHistory = [pokeData, ...searchHistory];
        this.setState({ searchHistory });
      })
      .catch((err) => {
        this.setState({ error: "No Pokemon Found" });
      });
    let searchBar = document.querySelector("#search-bar");
    searchBar.value = "";
    e.preventDefault();
  }

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  render() {
    let { searchTerm, searchHistory, myTeam, showTeam } = this.state;
    let lastSearched = searchHistory.length > 0 ? searchHistory[0] : false;
    return (
      <div className="App column">
        <NavBar
          showTeam={showTeam}
          handleSearchChange={this.handleSearchChange}
          handleSearchClick={this.handleSearchClick}
          toggleRightBarMode={this.toggleRightBarMode}
        />
        <div className="row">
          <MainPage lastSearched={lastSearched} />
          <RightSideBar
            myTeam={myTeam}
            searchHistory={searchHistory}
            showTeam={showTeam}
          />
        </div>
      </div>
    );
  }
}

export default App;
