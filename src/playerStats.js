import React, { useState } from 'react';
import './App.css';
import CompareBox from './combareBox';
// import MyShoppingCart from './components/MyShoppingCart';
import Form from './form';

export default function playerStats() {
    // const [products, setProducts] = useState(productsArr);
    const [player, setPlayer] = useState([]);
    const [playerStats, setPlayerStats] = useState([])
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
            {/* Task 2: Render addProduct, and pass addProduct function as props */}
            <Form addPlayer={addPlayer} />
            <Form addPlayer={addPlayer} />
            {/* Task 3: Render AllTheThings and MyShoppingCart, and pass the functions addToCart and remove from cart as props */}
            <CompareBox />
            {/* <MyShoppingCart removeFromCart={removeFromCart} cart={cart} /> */}
        </div>
    );
}