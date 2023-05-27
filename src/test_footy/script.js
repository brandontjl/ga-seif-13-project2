const axios = require('axios');
const fs = require('fs');
const { join } = require('path');

// Your API key and endpoints
const apiKey = 'test85g57';
const teamEndpoint = `https://api.football-data-api.com/league-teams?key=${apiKey}&season_id=2012&include=stats`;
const playerEndpoint = `https://api.football-data-api.com/league-players?key=${apiKey}&season_id=2012`;

// Function to fetch data from an API endpoint
async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data.data;  // extract 'data' field from response
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to write data to a JSON file
function writeToFile(data, filename) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Successfully wrote to ${filename}.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fetch team and player data
Promise.all([fetchData(teamEndpoint), fetchData(playerEndpoint)]).then(([teamData, playerData]) => {
  // Write data to files
  writeToFile(teamData, 'team_data.json');
  writeToFile(playerData, 'player_data.json');

  // Now you can work with both data sets
  console.log(teamData);
  console.log(playerData);

  // Join player data with team data on player.club_id and team.id
  const joinedData = playerData.map(player => {
    // Find the team that matches this player's club_id
    const team = teamData.find(team => team.id === player.club_team_id);

    // If a matching team was found, replace the player's club_id with the team_name
    if (team) {
      player.team_name = team.name;
    }
    return player;
  });

  // Write joinedData to a JSON file
  writeToFile(joinedData, 'joined_data.json');

});

// Writing code to convert JSON file into CSV
// function jsonToCsv(items) {
//   const header = Object.keys(items[0])
//   const headerString = header.join(',');

//   // handle null or undefined values
//   const replacer = (key, value) => value ?? ''

//   const rowItems = items.map((row) =>
//     header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
//   );

//   // join header and body and break into separate lines
//   const csv = [headerString, ...rowItems].join('\r\n');

//   return csv
// }

function jsonToCsv(jsonFile, csvFile) {
  const jsonData = fs.readFileSync(jsonFile, 'utf8')
  const data = JSON.parse(jsonData)

  const headers = Object.keys(data[0]);

  let csv = headers.join(',') + '\n';

  data.forEach(obj => {
    const row = headers.map(header => obj[header])
    csv += row.join(',') + '\n'
  })

  fs.writeFileSync(csvFile, csv, 'utf8')
}

const joinedJSONfile = "/Users/brandontjl/Desktop/test_footy/joined_data.json"
const teamJSONfile = "/Users/brandontjl/Desktop/test_footy/team_data.json"
jsonToCsv(joinedJSONfile, "joined_data.csv")
jsonToCsv(teamJSONfile, "team_data.csv")

