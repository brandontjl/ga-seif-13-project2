import React from "react"
import Header from "./Header.js"
import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedStats, setSelectedStats] = useState("")

  // const trialAPI = fetch("https://api.football-data-api.com/test-call?key=test85g57")
  // // This is not working - unsure why though
  // console.log(trialAPI)

  fetch('https://api.football-data-api.com/league-teams?key=example&season_id=2012&include=stats')
    .then(response => response.json()) // or response.text() if you want the response as text
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  const handleClick = () => {
    setSelectedTeam();
    setSelectedStats();
  };

  const plTeams = [] // API call to football stats



  return (
    <div className="App">
      <header className="App-header">
        <Header />
        Learn React
      </header>
      <img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />

    </div>
  );
}

export default App;
