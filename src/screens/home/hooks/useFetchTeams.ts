import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../../../store/modules/teams/teamSlice';
import { selectLoading, selectTeams } from '../../../store/modules/teams/selectors';

export const useFetchTeams = () => {
  const dispatch = useDispatch();

  const fetchTeams = useCallback(() => {
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const teams = useSelector(selectTeams);
  const isLoading = useSelector(selectLoading);

  return {teams, isLoading, fetchTeams};
};
