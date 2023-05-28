import React from "react"

function IndivTeamStats(props) {
    const { src, alt, team, pos, wins, draws, losses, gf, ga } = props;
    return (
        <div className="selectTeam">
            < img id="teamImage" src={src} alt={alt} />
            <h1 id="statsheader">{team} Stats</h1>
            <div className="statsblock">
                <ul><strong>Position: {pos}</strong> </ul>
                <ul><strong>Wins: {wins}</strong> </ul>
                <ul><strong>Draws: {draws}</strong> </ul>
                <ul><strong>Losses: {losses}</strong> </ul>
                <ul><strong>Goals for: {gf} </strong> </ul>
                <ul><strong>Goals against: {ga}</strong> </ul>
            </div>
        </div>
    );
}

export default IndivTeamStats