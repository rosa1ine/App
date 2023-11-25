import React from "react";
import MapView from 'react-native-maps';
import {View, Text} from "react-native";
<<<<<<< HEAD
import HomeMap from "../../components/HomeMap";
=======
import RouteMap from "../../components/RouteMap";
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead
import CarTypes from "../../components/CarTypes";

const SearchResults = (props) => {
    return (
        <View>
            <CarTypes />
<<<<<<< HEAD
            <HomeMap />
=======
            <RouteMap />
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead
        </View>
    );
};

export default SearchResults;