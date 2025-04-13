import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TeamsState } from './types';
import { loadPlayers, loadTeams } from '../../../api';

const initialState: TeamsState = {
  data: [],
  players: [],
  loading: false,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        console.log('Teams fetched successfully:', action.payload);
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.loading = false;
        const error = action.error.message;
        if (error) {
          console.log('Error fetching teams:', error);
        }
      })
      .addCase(getPlayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.players = action.payload[0].players;
        state.loading = false;
      })
      .addCase(getPlayers.rejected, (state, action) => {
        state.loading = false;
        const error = action.error.message;
        if (error) {
          console.log('Error fetching teams:', error);
        }
      })
  },
});

export const getTeams = createAsyncThunk('league/teams', async (params?: string) => {
  const response = await loadTeams(params);

  return response;
});

export const getPlayers = createAsyncThunk('team/players', async (id: number) => {
  const response = await loadPlayers(id);

  return response;
});

export const {} = teamsSlice.actions;

export default teamsSlice.reducer;
