// import React from "react";
// import MapView from 'react-native-maps';
// import {View, Text} from "react-native";
// import HomeMap from "../../components/HomeMap";
// import RouteMap from "../../components/RouteMap";
// import CarTypes from "../../components/CarTypes";

// const SearchResults = (props) => {
//     return (
//         <View>
//             <CarTypes />
//             <HomeMap />
//             <RouteMap />
//         </View>
//     );
// };
//export default SearchResults;

import React from "react";
import MapView from 'react-native-maps';
import {View, Text, StyleSheet} from "react-native";
import RouteMap from "../../components/RouteMap";
import CarTypes from "../../components/CarTypes";
import {useRoute} from '@react-navigation/native';

const SearchResults = (props) => {
    const route = useRoute();
    const { originPlace, destinationPlace } = route.params;
    return (
        <View style={styles.container}>
            <View style = {{flex: 1, flexDirection: 'column'}}>
                <RouteMap originPlace={originPlace} destinationPlace={destinationPlace}/>
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
