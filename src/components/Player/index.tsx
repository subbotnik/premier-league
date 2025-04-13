import { StyleSheet, View, Text } from 'react-native';
import { PlayerInfo } from '../../store/modules/teams/types';
import FastImage from '@d11/react-native-fast-image';

export const Player = ({item}: {item: PlayerInfo}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: item.photo,
          priority: FastImage.priority.normal,
        }}
        style={styles.photo}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View>
        <Text style={styles.text}>{`Name: ${item.name}`}</Text>
        <Text style={styles.text}>{`Position: ${item.position}`}</Text>
        <Text style={styles.text}>{`${item.age} y.o.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 5,
  },
});
