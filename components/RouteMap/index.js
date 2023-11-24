import React, { useState } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY';
const RouteMap = (props) => {

  const destination = {
    latitude: 28.450627,
    longitude: -16.263045,
  
  };
  return (
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="hotpink"
        />
        <Marker
          coordinate={origin}
          title={'Origin'}
        />
        <Marker
          coordinate={destination}
          title={"Destination"}
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