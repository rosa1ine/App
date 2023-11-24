import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeMap from './components/HomeMap/index.js';
import HomeSearch from './components/HomeSearch/index.js';
import DestinationSearch from './screens/DestinationSearch/index.js';
import HomeScreen from './screens/HomeScreen/index.js';
import CarTypeRow from './components/CarTypeRow/index.js';
import CarTypes from './components/CarTypes/index.js';
import RouteMap from './components/RouteMap/index.js';
import SearchResults from './screens/SearchResults/index.js';
import Profile from './screens/Profile/index.js';

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DestinationSearch/>
    </View>
  );
}
/*Ayaulym says hi*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
