import React from "react"
import { useState, useEffect } from "react";
import IndivTeamStats from "./IndivTeamStats.js";
import Thumbnail from "./Thumbnail.js";
import axios from 'axios'
import './App.css';

function TeamsStats() {
    const apiKey = 'AIzaSyAPtxC12_W9zpveYhmFPymdipJByw5SX2o'
    // const apiKey2 = 'AIzaSyB1X3doyCS5XfPSrMALshUN988xjNDJrNs'
    // const combinedSpreadsheetID = '1rDznwyCVE4QSW5cDNFJzrqy48_btCHYwIGdE4Lm_uKw'
    // const combinedSheetName = "Joined_Data"
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
                {teamStats.map((team, index) => (
                    < Thumbnail
                        key={index}
                        src={teamStats[index][5]}
                        alt={team}
                        onClick={() => handleClick(team)}
                    />
                ))}
            </div>
        );
    }

    return (
        <div>
            <ThumbnailSection teamStats={teamStats} handleClick={handleClick} />
            {selectedTeam && <IndivTeamStats src={selectedTeam[5]} handleClick={handleClick} team={selectedTeam[2]} pos={selectedTeam[9]} wins={selectedTeam[17]} draws={selectedTeam[18]} losses={selectedTeam[19]} gf={selectedTeam[15]} ga={selectedTeam[16]} />}
            < img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />
        </div>
    );
}

export default TeamsStats
