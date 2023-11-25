import React, { useState } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY';

const RouteMap = ({ originPlace, destinationPlace }) => {
  const getCoordinates = (place) => {
    return {
      latitude: place?.data?.geometry?.location?.lat || 0,
      longitude: place?.data?.geometry?.location?.lng || 0,
    };
  };

  const origin = getCoordinates(originPlace);
  const destination = getCoordinates(destinationPlace);

  return (
    <MapView
      style={{ width: '100%', height: '50%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: (origin.latitude),
        longitude: (origin.longitude),
    }}
  >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="hotpink"
        />

        <Marker coordinate={origin} title={'Origin'} />
        <Marker coordinate={destination} title={"Destination"} />
    </MapView>
    );
  };
export default RouteMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});