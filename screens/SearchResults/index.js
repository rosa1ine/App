import React from "react";
import MapView from 'react-native-maps';
import {View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
import CarTypes from "../../components/CarTypes";

const SearchResults = (props) => {
    return (
        <View>
            <CarTypes />
            <HomeMap />
        </View>
    );
};

export default SearchResults;