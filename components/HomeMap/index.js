<<<<<<< HEAD
import React, { useState } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import cars from '../../assets/data/cars'
const HomeMap = (props) => {

  const getImage = (type) => {
    if (type.type == 'UberX') {
      return require('../../assets/images/top-UberX.png')
    }
    if (type.type == 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    
    return require('../../assets/images/top-UberXL.png')
  }
//test comment
  const [mapRegion, setmapRegion] = useState({
    latitude: 28.450627,
    longitude: -16.263045,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
      {
      cars.map((car) => (
         <Marker
            key={car.id}
            coordinate = {{latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style = {{width: 70, height: 70, resizeMode: 'contain'}}
            source = {getImage(car.type)} /> 
     
        </Marker>
      ))
      }
      
      </MapView>
    </View>
  );
};
export default HomeMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
=======
import React, { useState } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars'
const HomeMap = (props) => {
  const getImage = (type) => {

    if (type == 'UberX') {
      return require('../../assets/images/top-UberX.png')
    }
    if (type == 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    
    return require('../../assets/images/top-UberXL.png')
  }

  const [mapRegion, setmapRegion] = useState({
    latitude: 51.1694,
    longitude: 71.4491,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        region={mapRegion}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
      >
      {
      cars.map((car) => (
         <Marker
            key={car.id}
            coordinate = {{latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style = {{
              width: 70, 
              height: 70, 
              resizeMode: 'contain', 
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source = {getImage(car.type)} /> 
     
        </Marker>
      ))
      }
      
      </MapView>
    </View>
  );
};
export default HomeMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
});