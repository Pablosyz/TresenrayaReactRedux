import React from 'react';
import { StackNavigator } from 'react-navigation';

import IndexScreen from './app/components/Index';
import GameScreen from './app/components/App';

export default App = StackNavigator({
  IndexScreen: {
    screen: IndexScreen,
    navigationOptions: {
      header: null
    }
  },
  GameScreen: {
    screen: GameScreen,
    navigationOptions: {
      header: null
    }
  }
})