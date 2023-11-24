import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeMap from './components/HomeMap/index.js';
import HomeSearch from './components/HomeSearch/index.js';
import DestinationSearch from './screens/DestinationSearch/index.js';
import HomeScreen from './screens/HomeScreen/index.js';
import CarTypeRow from './components/CarTypeRow/index.js';
import CarTypes from './components/CarTypes/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DestinationSearch />
    </View>
  );
}
/*Ayaulym says hi*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
