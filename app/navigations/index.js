import React, {useEffect} from 'react';
import {StatusBar, Platform, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Main from '../navigations/main';
import Splash from './../screens/splash/index';
import Login from './../screens/login/index';
import Register from '../screens/register';

const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main">
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}