import React, { useState } from "react";

function Form(props) {
    // Task 6: Create useState hooks for both player Names
    const [playerName, setPlayerName] = useState("")
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