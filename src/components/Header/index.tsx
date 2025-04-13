import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Search } from '../Search';
import { BackButton } from '../BackButton';

export const Header = ({ hasBackButton }: {hasBackButton?: boolean}) => {
  return (
    <View style={styles.container}>
      {
        hasBackButton ?
        (
          <BackButton />
        ) : (
          <>
            <Text style={styles.title}>Premier League</Text>
            <Search />
          </>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
});
