import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import RouteMap from "../../components/RouteMap";
import CarTypes from "../../components/CarTypes";
import {useRoute} from '@react-navigation/native';


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

  const route = useRoute();

console.log(route.parans);
  return (
    <View style={styles.container}>
        <View style = {{flex: 1, flexDirection: 'column'}}>
           <RouteMap />
            <CarTypes />           
        </View>
    </View>

  );
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default SearchResults;