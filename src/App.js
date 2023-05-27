import React from "react"
import Header from "./Header.js"
import { useState, useEffect } from "react";
import logo from './logo.svg';
import image from "./PitchCF.jpeg"
import Thumbnail from "./Thumbnail.js";
import NavBar from "./nav_bar.js";
import axios from 'axios'
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedStats, setSelectedStats] = useState("")

  const apiKey = 'AIzaSyAPtxC12_W9zpveYhmFPymdipJByw5SX2o'
  const apiKey2 = 'AIzaSyB1X3doyCS5XfPSrMALshUN988xjNDJrNs'
  const combinedSpreadsheetID = '1rDznwyCVE4QSW5cDNFJzrqy48_btCHYwIGdE4Lm_uKw'
  const combinedSheetName = "Joined_Data"
  const teamSpreadsheetID = '19cnSGkQIR7ZDQLe-pfMHM0Dzz-pmikZ2Mi1Jd7FFqjg'
  const teamSheetName = "Team_Data"
  let playerStats = {}
  let teamStats = {}
  // to pull the data from Google Sheets - Joined_Data for player stats
  const fetchGoogleCombinedData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${combinedSpreadsheetID}/values/${combinedSheetName}?key=${apiKey}`);
      // console.log(response.data.values)
      playerStats = response.data.values
      console.log(playerStats)
      return response.data
    } catch (error) {
      console.log('Error:', error)
    }
  }
  // to pull the data from Google Sheets - Team_Data for Team stats
  const fetchGoogleTeamData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/19cnSGkQIR7ZDQLe-pfMHM0Dzz-pmikZ2Mi1Jd7FFqjg/values/Team_Data?key=AIzaSyAPtxC12_W9zpveYhmFPymdipJByw5SX2o`)
      teamStats = response.data.values
      console.log(teamStats)
      return response.data
    } catch (error) {
      console.log("Error:", error)
    }
  }

  useEffect(() => {
    fetchGoogleCombinedData()
    fetchGoogleTeamData()
  }, [])
  //to mount both data once upon render

  const handleClick = (teamsObj) => {
    setSelectedTeam(teamsObj.image);
    setSelectedStats(teamsObj.stats);
  };

  const plTeams = [] // API call to football stats

  // const teams1 = teamEndpoint.map((image, index) => (
  //   // <img
  //   //   key={index}
  //   //   className="thumb"
  //   //   src={image.img}
  //   //   alt={image.city}
  //   //   onClick={() => handleClick(image)}
  //   // />
  //   <Thumbnail
  //     key={index}
  //     src={image.img}
  //     alt={image.city}
  //     onClick={() => handleClick(image)}
  //   />
  // ));

  // function ThumbnailSection(props) {
  //   const { imagesArr, handleClick } = props;
  //   return (
  //     <div id="thumbnails">
  //       {imagesArr.map((image, index) => (
  //         <Thumbnail
  //           key={index}
  //           src={image.img}
  //           alt={image.city}
  //           onClick={() => handleClick(image)}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div style={{
      backgroundImage: `url(${image})`
    }} className="App">
      <header className="App-header">
        <Header />
        <NavBar />
      </header>
      <img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />

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