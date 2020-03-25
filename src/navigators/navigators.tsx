import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  HeaderBackButton,
} from '@react-navigation/stack';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Login from '../pages/Login';
import User from '../pages/User';

const Auth = createStackNavigator();
const App = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Auth.Navigator>
  );
};

const AppStack: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <App.Screen
      name="Movie"
      component={Movie}
      options={{
        // headerShown: false,
        headerTransparent: true,
        title: '',
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'white',
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
      }}
    />
    <App.Screen
      name="User"
      component={User}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: 'white',
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
      }}
    />
  </App.Navigator>
);

export {AppStack, AuthStack};
