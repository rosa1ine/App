// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import DestinationSearch from './screens/DestinationSearch';
import Route from './navigation/Route'; // Import Route.js
import SearchResults from './screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import registerNNPushToken from 'native-notify';
import Profile from './screens/Profile/index.js';

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

=======
import HomeMap from './components/HomeMap/index.js';
import HomeSearch from './components/HomeSearch/index.js';
import DestinationSearch from './screens/DestinationSearch/index.js';
import HomeScreen from './screens/HomeScreen/index.js';
import CarTypeRow from './components/CarTypeRow/index.js';
import CarTypes from './components/CarTypes/index.js';
import Profile from './screens/Profile/index.js';
>>>>>>> acf8b199145ff96ebf825815e893770fb4261507

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