import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import cars from '../../assets/data/cars';

const getImage = (type) => {
  if (type.type == 'Econom') {
    return require('../../assets/images/top-Econom.png')
  }
  if (type.type == 'Comfort') {
    return require('../../assets/images/top-Comfort.png')
  }
  
  return require('../../assets/images/top-Comfort2.png')
}


const GOOGLE_MAPS_APIKEY =  'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY';

const RouteMap = (props) => {
  const [pin, setPin] = useState({
    latitude: 51.1794,
    longitude: 71.491,
  });

  const destination = {
    latitude: 51.1614,
    longitude: 71.4191,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <MapView
      style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 51.1694,
        longitude: 71.4491,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      onUserLocationChange={(e) => {
        console.log('onUserLocationChange', e.nativeEvent.coordinate);
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
      }}
    >
      <MapViewDirections
        origin={pin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="blue"
      />
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
      
      <Marker
        coordinate={pin}
        pinColor="blue"
        draggable={true}
        title={'Origin'}
        onDragStart={(e) => {
          console.log('Drag Start', e.nativeEvent.coordinate);
        }}
        onDragEnd={(e) => {
          console.log('Drag End', e.nativeEvent.coordinate);
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      />
      <Marker
        coordinate={destination}
        title={'Destination'}
        pinColor="blue"
        draggable={true}
        onDragStart={(e) => {
          console.log('Drag Start', e.nativeEvent.coordinate);
        }}
        onDragEnd={(e) => {
          console.log('Drag End', e.nativeEvent.coordinate);
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      />
      <MapViewDirections
        origin={pin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="blue"
      />
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});