import logo from "./logo.svg";
import "./App.css";
// import { Component } from "react";
import { useState, useEffect } from "react";
import { randomNumber, formatPokeData } from "./helperFunctions";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import RightSideBar from "./components/RightSideBar";

function App() {

  let [searchTerm, setSearchterm] = useState('');
  let [searchHistory, setSearchHistory] = useState([]);
  let [myTeam, setMyTeam] = useState([]);
  let [showTeam, setShowteam] = useState(true);
  let [error, setError] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon/`; // the base url for searching a pokemon, minus the actual number or name

  // Helpers to make fetching cleaner to read:

  async function fetchPokemonFromSearchTerm(term) {
    // console.log('term:', term)
    return fetch(`${url}${term}`)
      .then((response) => response.json())
      .then(formatPokeData);
  }


  function fetchRandomPokemon() {
    return fetchPokemonFromSearchTerm(randomNumber(900));
  }

	useEffect(() => {
    fetchRandomPokemon().then((pokeData) => {

      searchHistory = searchHistory.filter(
        (item) => item.name !== pokeData.name
      );

      setSearchHistory([pokeData, ...searchHistory]);
    });

	}, []);

  function toggleRightBarMode() {
    // let showTeam = !showTeam;
    setShowteam(!showTeam);
  }

  function handleSearchClick(e) {
    setError(false);

    fetchPokemonFromSearchTerm(searchTerm)
      .then((pokeData) => {

        let searchHistoryFilter = searchHistory.filter(
          (item) => item.name !== pokeData.name
        );

        setSearchHistory([pokeData, ...searchHistoryFilter]);
      })
      .catch((err) => {
        setError("No Pokemon Found");
      });

    let searchBar = document.querySelector("#search-bar");
    searchBar.value = "";
    e.preventDefault();
  }

  function handleSearchChange(e) {
    setSearchterm(e.target.value);
  }

  function handleAddToTeamClick(e) {

    // myTeam = new Set([searchHistory[0], ...myTeam]);
    setMyTeam([...[searchHistory[0], ...myTeam]]);
  }

  function handleRemoveFromTeamClick(removalIndex) {
    let newTeam = myTeam.filter((pokemon, index) => index !== removalIndex);
    setMyTeam(newTeam);
  }


  function handleHistoryCardClick(historyIndex) {

    let clicked = searchHistory.splice(historyIndex, 1);
    setSearchHistory([...clicked, ...searchHistory]);
  }


  //return instead of render now

  let lastSearched = searchHistory.length > 0 ? searchHistory[0] : false;
  return(
    <div className="App column">

      <NavBar
        showTeam={showTeam}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
        toggleRightBarMode={toggleRightBarMode}
      />
      <div className="row">
        <MainPage
          lastSearched={lastSearched}
          searchTerm={searchTerm}
          error={error}
          handleAddToTeamClick={handleAddToTeamClick}
        />
        <RightSideBar
          myTeam={myTeam}
          searchHistory={searchHistory}
          showTeam={showTeam}
          handleRemoveFromTeamClick={handleRemoveFromTeamClick}
          handleHistoryCardClick={handleHistoryCardClick}
        />
      </div>
    </div>
  );

}

export default App;
