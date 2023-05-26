import React from "react"
import Header from "./Header.js"
import { useState, useEffect } from "react";
import logo from './logo.svg';
import image from "./PitchCF.jpeg"
import Thumbnail from "./Thumbnail.js";
import NavBar from "./nav_bar.js";
import './App.css';


// const axios = require('axios');
// const fs = require('fs');

function App() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedStats, setSelectedStats] = useState("")

  // const trialAPI = fetch("https://api.football-data-api.com/test-call?key=test85g57")
  // // This is not working - unsure why though
  // console.log(trialAPI)

  useEffect(() => {
    fetchData();
  }, [])
  //to call mount fetchData once

  // const axios = require('axios');
  // const fs = require('fs');
  const apiKey = 'test85g57'
  // const teamEndpoint = `https://www.omdbapi.com/?apikey=98e3fb1f&t=Eraserhead`;

  const teamEndpoint = `https://api.football-data-api.com/league-teams?key=${apiKey}&season_id=2012&include=stats`
  // the football API is not working because of the link. Tried with Movie Data and it was successful
  // error is failed to fetch unsure why
  // there is the CORS error as well but not as prevalent and can be resolved
  const teams = {}

  const fetchData = async () => {
    try {
      const response = await fetch(teamEndpoint, { mode: 'no-cors' });
      const jsonData = await response.json();
      console.log(jsonData)
      // how to assign jsonData to an object?
    } catch (error) {
      console.log('Error:', error)
    }
  }


  //   const res = await fetch(teamEndpoint, { mode: 'no-cors' });
  //   const data = await res.json();
  //   console.log(data);
  // }

  // Sean's code
  // async function fetchData(endpoint) {
  //   try {
  //     const response = await axios.get(endpoint);
  //     return response.data.data;  // extract 'data' field from response
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  // fetchData(teamEndpoint)


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
