import React, { useState, useEffect } from 'react';
import './App.css';
import CompareBox from './compareBox';
import axios from "axios"
// import MyShoppingCart from './components/MyShoppingCart';
import Form from './form';

export default function PlayerStats() {
    // const [products, setProducts] = useState(productsArr);

    const apiKey = 'AIzaSyAPtxC12_W9zpveYhmFPymdipJByw5SX2o'
    // const apiKey2 = 'AIzaSyB1X3doyCS5XfPSrMALshUN988xjNDJrNs'
    const combinedSpreadsheetID = '1rDznwyCVE4QSW5cDNFJzrqy48_btCHYwIGdE4Lm_uKw'
    const combinedSheetName = "Joined_Data"
    const [player, setPlayer] = useState([]);
    const [playerStats, setPlayerStats] = useState([])
    const [indivPlayer, setIndivPlayer] = useState([])
    // const [playerOneStats, setPlayerOneStats] = useState(playerOne)
    //might not need the above code if playerOne already calls the array

    // Task 1: Implement player adding, implement product adding.
    const fetchGoogleCombinedData = async () => {
        try {
            const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${combinedSpreadsheetID}/values/${combinedSheetName}?key=${apiKey}`);
            // console.log(response.data.values)
            setPlayerStats(response.data.values)
            return response.data.values
            // console.log(playerStats)
        } catch (error) {
            console.log('Error:', error)
        }
    }

    useEffect(() => {
        fetchGoogleCombinedData()
    }, [])

    const addToCompareBox = (player) => {
        setPlayer(player)
    }

    const addPlayer = (props) => {
        const { name } = props
        const newPlayer = { name }
        setPlayer(newPlayer)
    }

    return (
        <div className="players">
            <h1>Players Face-off</h1>
            <Form addPlayer={addPlayer} playerData={playerStats} setIndivPlayer={setIndivPlayer} />
            {/* <Form addPlayer={addPlayer} playerData={playerStats} setIndivPlayer={setIndivPlayer} /> */}
            <CompareBox searchedPlayer={indivPlayer[3]} team={indivPlayer[28]} age={indivPlayer[4]} height={indivPlayer[5]} weight={indivPlayer[6]} position={indivPlayer[10]} minsPlayed={indivPlayer[11]} goals={indivPlayer[19]} cleanSheets={indivPlayer[20]} assists={indivPlayer[22]} />
        </div>
    );
}