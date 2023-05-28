import React from "react"
import Header from "./Header.js"
import { useState, useEffect } from "react";
import IndivTeamStats from "./IndivTeamStats.js";
import image from "./PitchCF.jpeg"
import Thumbnail from "./Thumbnail.js";
import NavBar from "./nav_bar.js";
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  const apiKey = 'AIzaSyAPtxC12_W9zpveYhmFPymdipJByw5SX2o'
  // const apiKey2 = 'AIzaSyB1X3doyCS5XfPSrMALshUN988xjNDJrNs'
  const combinedSpreadsheetID = '1rDznwyCVE4QSW5cDNFJzrqy48_btCHYwIGdE4Lm_uKw'
  const combinedSheetName = "Joined_Data"
  const teamSpreadsheetID = '19cnSGkQIR7ZDQLe-pfMHM0Dzz-pmikZ2Mi1Jd7FFqjg'
  const teamSheetName = "A2:T21"
  // teamSheetName is set to a range because upon inspection, it was unable to parse range data if i just use the name of the sheet and it was throwing an error

  // to pull the data from Google Sheets - Joined_Data for player stats
  // const fetchGoogleCombinedData = async () => {
  //   try {
  //     const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${combinedSpreadsheetID}/values/${combinedSheetName}?key=${apiKey}`);
  //     // console.log(response.data.values)
  //     setPlayerStats(response.data.values)
  //     return response.data.values
  //     // console.log(playerStats)
  //   } catch (error) {
  //     console.log('Error:', error)
  //   }
  // }
  // to pull the data from Google Sheets - Team_Data for Team stats
  const fetchGoogleTeamData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${teamSpreadsheetID}/values/${teamSheetName}?key=${apiKey}`)
      setTeamStats(response.data.values)
      return response.data.values
      // console.log(teamStats)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  //to mount both data once upon render
  useEffect(() => {
    // fetchGoogleCombinedData()
    fetchGoogleTeamData()
  }, [])

  const [teamStats, setTeamStats] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(teamStats[0])

  const handleClick = (teamObj) => {
    setSelectedTeam(teamObj);
    console.log(selectedTeam)
    // setSelectedStats();
  };

  function ThumbnailSection(props) {
    const { teamStats, handleClick } = props;
    return (
      <div id="thumbnails">
        {teamStats.map((image, index) => (
          < Thumbnail
            key={index}
            src={teamStats[index][5]}
            alt={image}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    );
  }

  // for the code below, the selectedTeam[5] and other array element calls throw an error (uncaught runtime error)sometimes but upon refresh and everything, it seems to be ok
  return (
    <div style={{
      backgroundImage: `url(${image})`
    }} className="App">
      <header className="App-header">
        <Header />
        <NavBar />
      </header>
      <div>
        <ThumbnailSection teamStats={teamStats} handleClick={handleClick} />
        <IndivTeamStats src={selectedTeam[5]} handleClick={handleClick} team={selectedTeam[2]} pos={selectedTeam[9]} wins={selectedTeam[17]} draws={selectedTeam[18]} losses={selectedTeam[19]} gf={selectedTeam[15]} ga={selectedTeam[16]} />
        < img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />
      </div>
    </div>
  );
}

export default App;

// Appendix - unused code / not working code

// const teamEndpoint = `https://www.omdbapi.com/?apikey=98e3fb1f&t=Eraserhead`;
// const teamEndpoint = `https://api.football-data-api.com/league-teams?key=${apiKey}&season_id=2012&include=stats`
// the football API is not working because of the link. Tried with Movie Data and it was successful
// error is failed to fetch unsure why
// there is the CORS error as well but not as prevalent and can be resolved

// const trialAPI = fetch("https://api.football-data-api.com/test-call?key=test85g57")
// This is not working - unsure why though
// console.log(trialAPI)

// const axios = require('axios');
// const fs = require('fs');

// useEffect(() => {
//   console.log(playerStats[1])
// }, [playerStats])

// Storing API call data into arrays for subsequent use but it is returning undefined - this is due to how the API calls areasynchronous and you will have to use useState to return the desired array
// console.log(playerStats[1])
// console.log(teamStats[1][5])
// for (let n = 0; n < teamStats.length; n++) {
//   console.log(teamStats[n])
// }

// Reference code from student examples in class (from the Cities of the World example)
// const teams = teamStats.map((image, index) => (
//   <Thumbnail
//     key={index}
//     src={image.img}
//     alt={image.city}
//     onClick={() => handleClick(image)}
//   />
// ));