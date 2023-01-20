import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator, AuthStackNavigator} from './StackNavigator';
import Homepage from '../screens/Homepage';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Main" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
