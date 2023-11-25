import { StyleSheet, Text, View } from 'react-native';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <HomeMap />
        <HomeSearch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;