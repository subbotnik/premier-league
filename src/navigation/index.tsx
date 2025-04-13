import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './MainNavigator';

export function Router() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
