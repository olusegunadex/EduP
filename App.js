import React, {useMemo, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './CustomStyles.js';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './Context.js';
import {SchoolContext} from './context/userContext.js';
import axios from 'axios';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './components/tabs';
import {DrawerScreen} from './navigation/AppDrawer';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Homepage from './screens/Homepage.js';
import Splash from './screens/Splash.js';
import Profile from './screens/Profile.js';
import {
  MainStackNavigator,
  AuthStackNavigator,
} from './navigation/StackNavigator.js';
import BottomTabNavigator from './navigation/TabNavigator.js';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('adex');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('adex');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken('adex');
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

  return (
    <AuthContext.Provider value={authContext}>
      <SchoolContext.Provider>
        <NavigationContainer>
          {userToken ? (
            <Drawer.Navigator>
              <Drawer.Screen
                name="Home Drawer"
                component={BottomTabNavigator}
              />
              <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
          ) : (
            <AuthStackNavigator />
          )}
        </NavigationContainer>
      </SchoolContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
