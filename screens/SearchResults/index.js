import React from "react";
import MapView from 'react-native-maps';
import {View, Text, StyleSheet} from "react-native";
import RouteMap from "../../components/RouteMap";
import CarTypes from "../../components/CarTypes";

const SearchResults = (props) => {
    return (
        <View style={styles.container}>
            <View style = {{flex: 1, flexDirection: 'column'}}>
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
