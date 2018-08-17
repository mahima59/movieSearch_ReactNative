/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ListScreen from './src/ListScreen';

export default App = StackNavigator({
  HomeScreen: { 
    screen: HomeScreen
  },
  ListScreen :{
    screen:ListScreen
  },
 
})