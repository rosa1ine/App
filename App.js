// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DestinationSearch from './screens/DestinationSearch';
import Route from './navigation/Route'; // Import Route.js
import SearchResults from './screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
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