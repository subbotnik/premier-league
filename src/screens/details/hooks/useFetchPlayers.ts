import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../../store/modules/teams/teamSlice';
import { selectLoading, selectPlayers } from '../../../store/modules/teams/selectors';

export const useFetchPlayers = (teamId: number) => {
  const dispatch = useDispatch();

  const fetchPlayers = useCallback((id: number) => {
    dispatch(getPlayers(id));
  }, [dispatch]);

  useEffect(() => {
    fetchPlayers(teamId);
  }, [dispatch, fetchPlayers, teamId]);

  const players = useSelector(selectPlayers);
  const isLoading = useSelector(selectLoading);

  return {players, isLoading, fetchPlayers};
}