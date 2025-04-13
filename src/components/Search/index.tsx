import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTeams } from '../../store/modules/teams/teamSlice';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onPress = () => {
    if (query) {
      dispatch(getTeams(query));
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search teams"
        placeholderTextColor="#fff"
        style={styles.search}
        onChangeText={setQuery}
        value={query}
      />
      <Button
        title="Search"
        color="#fff"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  search: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    flex: 1,
  },
});
