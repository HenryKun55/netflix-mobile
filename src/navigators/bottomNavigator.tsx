import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Home from '../pages/Home';
import Movie from '../pages/Movie';

const Stack = createStackNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomNavigator;
