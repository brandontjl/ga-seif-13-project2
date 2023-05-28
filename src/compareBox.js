// import { androiddeviceprovisioning } from 'googleapis/build/src/apis/androiddeviceprovisioning';
import React from 'react';

function CompareBox(props) {
    const { searchedPlayer, team, age, height, weight, position, minsPlayed, goals, cleanSheets, assists } = props
    return (
        <div className="compare">
            <h2 data-testid="comparison">Player Stats </h2>
            {/* Task 4: Render products in component */}
            <div className="statsblock">
                <ul><strong>Name {searchedPlayer}</strong> </ul>
                <ul><strong>Team: {team}</strong> </ul>
                <ul><strong>Age: {age}</strong> </ul>
                <ul><strong>Height in cm: {height}</strong> </ul>
                <ul><strong>Weight in kg: {weight} </strong> </ul>
                <ul><strong>Position: {position}</strong> </ul>
                <ul><strong>Minutes Played: {minsPlayed}</strong> </ul>
                <ul><strong>Goals Scored: {goals}</strong> </ul>
                <ul><strong>Clean Sheets: {cleanSheets} </strong> </ul>
                <ul><strong>Assists: {assists}</strong> </ul>
            </div>
        </div>
    )
}

export default CompareBox;