import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MainStackParamList } from '../../navigation/MainNavigator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const BackButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <Text style={styles.back}>❮</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  back: {
    color: 'white',
    fontSize: 20,
  },
});
