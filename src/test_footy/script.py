import requests
import json

# Your API key and endpoints
apiKey = 'test85g57'
teamEndpoint = f'https://api.football-data-api.com/league-teams?key={apiKey}&season_id=2012&include=stats'
playerEndpoint = f'https://api.football-data-api.com/league-players?key={apiKey}&season_id=2012'

# Function to fetch data from an API endpoint
def fetch_data(endpoint):
    try:
        response = requests.get(endpoint)
        return response.json()['data']  # extract 'data' field from response
    except Exception as error:
        print('Error:', error)

# Function to write data to a JSON file
def write_to_file(data, filename):
    try:
        with open(filename, 'w') as file:
            json.dump(data, file, indent=2)
        print(f"Successfully wrote to {filename}.")
    except Exception as error:
        print('Error:', error)

# Fetch team and player data
team_data = fetch_data(teamEndpoint)
player_data = fetch_data(playerEndpoint)

if team_data is not None and player_data is not None:
    # Write data to files
    write_to_file(team_data, 'team_data.json')
    write_to_file(player_data, 'player_data.json')

    # Now you can work with both data sets
    print(team_data)
    print(player_data)

    # Join player data with team data on player.club_id and team.id
    joined_data = []
    for player in player_data:
        # Find the team that matches this player's club_id
        team = next((t for t in team_data if t['id'] == player['club_team_id']), None)

        # If a matching team was found, replace the player's club_id with the team_name
        if team:
            player['team_name'] = team['name']
        joined_data.append(player)

    # Write joined_data to a JSON file
    write_to_file(joined_data, 'joined_data.json')