// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DestinationSearch from './screens/DestinationSearch';
import Route from './navigation/Route'; // Import Route.js

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Route />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
