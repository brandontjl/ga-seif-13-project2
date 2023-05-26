import React from "react"
import Header from "./Header.js"
import { useState, useEffect } from "react";
import logo from './logo.svg';
import image from "./PitchCF.jpeg"
import Thumbnail from "./Thumbnail.js";
import './App.css';


const axios = require('axios');
const fs = require('fs');

function App() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedStats, setSelectedStats] = useState("")

  // const trialAPI = fetch("https://api.football-data-api.com/test-call?key=test85g57")
  // // This is not working - unsure why though
  // console.log(trialAPI)

  // fetch('https://api.football-data-api.com/league-teams?key=example&season_id=2012&include=stats')
  //   .then(response => response.json()) // or response.text() if you want the response as text
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));
  useEffect(() => {
    fetchData();
  }, [])
  //to call mount fetchData once

  const axios = require('axios');
  const fs = require('fs');
  const apiKey = 'test85g57'
  const teamEndpoint = `https://api.football-data-api.com/league-teams?key=${apiKey}&season_id=2012&include=stats`;
  const teams = []

  // const fetchData = () => {
  //   fetch(teamEndpoint).then(res => res.json()).then((data) => console.log(data))
  // }
  // Above function fails to fetch - not sure why 

  const fetchData = async () => {
    try {
      const response = await fetch(teamEndpoint);
      const jsonData = await response.json();
      teams = [jsonData]
      console.log(teams)
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
  fetchData(teamEndpoint)


  const handleClick = () => {
    setSelectedTeam();
    setSelectedStats();
  };

  const plTeams = [] // API call to football stats

  const teams1 = teamEndpoint.map((image, index) => (
    // <img
    //   key={index}
    //   className="thumb"
    //   src={image.img}
    //   alt={image.city}
    //   onClick={() => handleClick(image)}
    // />
    <Thumbnail
      key={index}
      src={image.img}
      alt={image.city}
      onClick={() => handleClick(image)}
    />
  ));

  function ThumbnailSection(props) {
    const { imagesArr, handleClick } = props;
    return (
      <div id="thumbnails">
        {imagesArr.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.img}
            alt={image.city}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{
      backgroundImage: `url(${image})`
    }} className="App">
      <header className="App-header">
        <Header />
        Learn React
      </header>
      <img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />

    </div>
  );
}

export default App;
