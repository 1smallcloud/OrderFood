import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import MainProductScreen from './src/screens/MainProductScreen';
import SearchScreen from './src/screens/SearchScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();
export default function App () {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="LoginScreen"
    //   screenOptions={{
    //     headerShown: false
    //   }}
    //   >
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="MainProduct" component={MainProductScreen} />
    //     <Stack.Screen name="Search" component={SearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SearchScreen />
  );
}