import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // Import your screens here
import Profile from '../screens/Profile';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
const Stack = createNativeStackNavigator();

function ProfileSettings() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

export default ProfileSettings;