import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY';

const RouteMap = ({ origin, destination }) => {
  console.log("Origin:", origin);
  console.log("Destination:", destination);

  // Check if origin and destination details are available
  if (!origin?.details?.geometry?.location || !destination?.details?.geometry?.location) {
    return <View style={styles.container}><Text>Loading map data...</Text></View>;
  }

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 51.1694,
        longitude: 71.4491,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="hotpink"
      />
      <Marker coordinate={originLoc} />
      <Marker coordinate={destinationLoc} />
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '50%',
  },
});



