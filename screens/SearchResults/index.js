import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import RouteMap from "../../components/RouteMap";


const SearchResults = (props) => {

  // Permission to get geolocation
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  
  return (
    <View>

      <RouteMap />
    </View>
  );
};

export default SearchResults;
