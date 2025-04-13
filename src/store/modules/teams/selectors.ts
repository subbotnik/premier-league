import { RootState } from '../../rootReducer';

export const selectTeams = (state: RootState) => {
  return state.teams.data;
};

export const selectPlayers = (state: RootState) => {
  return state.teams.players;
};

export const selectLoading = (state: RootState) => {
  return state.teams.loading;
};
