import React from "react";
import MapView from 'react-native-maps';
<<<<<<< HEAD
import {View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
=======
import {View, Text, StyleSheet} from "react-native";
import RouteMap from "../../components/RouteMap";
>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
import CarTypes from "../../components/CarTypes";

const SearchResults = (props) => {
    return (
<<<<<<< HEAD
        <View>
            <CarTypes />
            <HomeMap />
=======
        <View style={styles.container}>
            <View style = {{flex: 1, flexDirection: 'column'}}>
                <CarTypes />
                
            </View>
>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
        </View>
    );
};

<<<<<<< HEAD
export default SearchResults;
=======

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default SearchResults;
>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
