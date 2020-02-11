import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StatusBar from '@react-native-community/status-bar';

import BottomNavigator from './bottomNavigator';

const Navigator: React.FC = () => {
  StatusBar.setBackgroundColor('#211102', true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
