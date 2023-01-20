import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from '../screens/Homepage';
import School from '../screens/School';
import Profile from '../screens/Profile';
import {MainStackNavigator} from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homepage} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export {Tabs, DrawerScreen};
