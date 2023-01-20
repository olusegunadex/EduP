import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainStackNavigator, AuthStackNavigator} from './StackNavigator';
import {BottomTabNavigator} from './TabNavigator';
import Homepage from '../screens/Homepage';
import Schools from '../screens/School';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Drawer" component={Homepage} />
      <Drawer.Screen name="Profile" component={Schools} />
    </Drawer.Navigator>
  );
};

export default BottomTabNavigator;
