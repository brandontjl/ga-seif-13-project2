// import { androiddeviceprovisioning } from 'googleapis/build/src/apis/androiddeviceprovisioning';
import React from 'react';

function CompareBox(props) {
    const { searchedPlayer, team, age, height, weight, position, minsPlayed, goals, cleanSheets, assists } = props
    return (
        <div className="compare">
            <h2 data-testid="comparison">Player Stats </h2>
            {/* Task 4: Render products in component */}
            <div className="playerblock">
                <ul>Name: <strong>{searchedPlayer}</strong> </ul>
                <ul>Age: <strong>{age}</strong> </ul>
                <ul>Height in cm: <strong>{height}</strong> </ul>
                <ul>Weight in kg: <strong>{weight} </strong> </ul>
                <ul>Position:<strong>{position}</strong> </ul>
                <ul>Minutes Played: <strong>{minsPlayed}</strong> </ul>
                <ul>Goals Scored: <strong>{goals}</strong> </ul>
                <ul>Clean Sheets: <strong>{cleanSheets} </strong> </ul>
                <ul>Assists: <strong>{assists}</strong> </ul>
            </div>
        </div>
    )
}

export default CompareBox;