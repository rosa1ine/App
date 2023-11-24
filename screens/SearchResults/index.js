import React from "react";
import MapView from 'react-native-maps';
import {View, Text} from "react-native";
import RouteMap from "../../components/RouteMap";
import CarTypes from "../../components/CarTypes";

const SearchResults = (props) => {
    return (
        <View>
            <CarTypes />
            <RouteMap />
        </View>
    );
};

export default SearchResults;