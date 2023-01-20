import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Homepage from '../screens/Homepage';
import School from '../screens/School';
import BottomTabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{title: 'Sign In', headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register', headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{title: 'Homepage', headerShown: false}}
      />
      <Stack.Screen
        name="School"
        component={School}
        options={{title: 'School', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, AuthStackNavigator};
