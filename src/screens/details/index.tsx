import React from 'react';
import { StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainNavigator';
import { Player } from '../../components/Player';
import { useFetchPlayers } from './hooks/useFetchPlayers';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

export const DetailsScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'Details'>>();

  const { id } = route.params;

  const {players, isLoading, fetchPlayers} = useFetchPlayers(id);

  return (
    <SafeAreaView style={styles.container}>
      <Header hasBackButton={true} />
      {
        isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={players}
            renderItem={({ item }) => <Player item={item} />}
            onRefresh={() => fetchPlayers(id)}
            refreshing={isLoading}
          />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151544',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
