import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';

import {StatusBar} from 'react-native';
import Route from './src/route/Index';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar translucent barStyle={colorScheme === 'dark' ? "light-content" : "dark-content"} backgroundColor={'rgba(255,255,255,0)'} />
      <Route />
    </NavigationContainer>
  );
}
