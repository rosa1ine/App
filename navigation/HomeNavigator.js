import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // Import your screens here
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

export default HomeNavigator;