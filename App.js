// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DestinationSearch from './screens/DestinationSearch';
import Route from './navigation/Route'; // Import Route.js
import SearchResults from './screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import registerNNPushToken from 'native-notify';
import Profile from './screens/Profile/index.js';

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');


export default function App() {
  registerNNPushToken(15337, 'ZITbRRqmrjebvoxOjRSBBH');

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DestinationSearch/>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
       
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});