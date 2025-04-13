import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native';
import { Team } from '../../components/Team';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/MainNavigator';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { useFetchTeams } from './hooks/useFetchTeams';
import { Loader } from '../../components/Loader';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onPress = (id: number) => {
    navigation.navigate('Details', { id });
  };

  const {teams, isLoading, fetchTeams} = useFetchTeams();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {
        isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={teams}
            renderItem={({ item }) => <Team item={item} onPress={onPress} />}
            onRefresh={fetchTeams}
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
