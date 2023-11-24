// Route.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index'; // Adjust this path if necessary
import DestinationSearch from '../screens/DestinationSearch';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />

      {/* Add other routes as needed */}
    </Stack.Navigator>
  );
};S

export default Route;
