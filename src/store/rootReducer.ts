import {combineReducers} from 'redux';

import teamsReducer from './modules/teams/teamSlice';

export const rootReducer = combineReducers({
  teams: teamsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
