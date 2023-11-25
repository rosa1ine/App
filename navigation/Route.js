import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // Import your screens here
import DestinationSearch from '../screens/DestinationSearch';
import HomeNavigator from './HomeNavigator';
import Profile from '../screens/Profile';
import ProfileSettings from './ProfileSettings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Route() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile settings" component={ProfileSettings} />
        <Drawer.Screen name="City" component={HomeNavigator} />
      </Drawer.Navigator>
  );
}

export default Route;
