import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TeamInfo } from '../../store/modules/teams/types';
import FastImage from '@d11/react-native-fast-image';

export const Team = ({item, onPress}: {item: TeamInfo, onPress: (id: number) => void}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.team.id)} style={styles.itemContainer}>
      <FastImage
        source={{
          uri: item.team.logo,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.logo}
      />
      <View>
        <Text style={styles.itemValue}>{item.team.code}</Text>
        <Text style={styles.itemValue}>{item.team.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  itemValue: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});
