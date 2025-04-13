import axios from 'axios';

const API_URL = 'https://v3.football.api-sports.io/';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'f797a27721a36e66cca3105402907b14',
  },
};

export const loadTeams = async (params?: string) => {
  const queries = params ? `league=39&season=2023&name=${params}` : 'league=39&season=2023';
  return axios.get(`${API_URL}/teams?${queries}`, config)
    .then((result) => {
      console.log('Teams fetched successfully:', result);
      return result.data.response;
    })
    .catch((error) => {
      return error;
    });
};

export const loadPlayers = async (id: number) => {
  return axios.get(`${API_URL}/players/squads?team=${id}`, config)
    .then((result) => {
      return result.data.response;
    })
    .catch((error) => {
      return error;
    });
};
