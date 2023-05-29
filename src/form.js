import React, { useState } from "react";

function Form(props) {
    // Task 6: Create useState hooks for both player Names
    const [playerName, setPlayerName] = useState("")
    const { playerData } = props
    // const [playerNameTwo, setPlayerNameTwo] = useState("")
    // Task 7: Create a function to handle the form submission

    const onChangePlayerName = (event) => {
        setPlayerName(event.target.value)
    }

    // const onChangePlayerTwoName = (event) => {
    //     setPlayerNameTwo(event.target.value)
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPlayer = {
            player: playerName,
        }

        props.addPlayer(newPlayer)
        console.log(newPlayer)
        console.log(playerData)
        for (let n = 1; n < playerData.length; n++) {
            // console.log(playerData[n][4])
            if (playerData[n][3] == (newPlayer.player)) {
                // need to lift state back up to parent component
                console.log(playerData[n])
                return playerData[n]
            } // my if statement is not working. Why? and also - how do I return the playerData upwards for use in CompareBox? Can I pass in state as props?
        }

        setPlayerName("")
    }

    const isNotEmpty = (string) => {
        return string.length >= 1
    }

    const verifyValidInputs = !(isNotEmpty(playerName))

    return (
        // Task 8: Add input fields and a submit button
        <>
            <input placeholder="playerName" onChange={onChangePlayerName} value={playerName} />
            {/* <input placeholder="playerTwo" onChange={onChangePlayerTwoName} value={playerNameTwo} type="number" /> */}
            <button onClick={handleSubmit} disabled={verifyValidInputs}>Add Player</button>
        </>
    );
}

export default Form;