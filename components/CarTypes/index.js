<<<<<<< HEAD
import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import CarTypeRow from "../CarTypeRow/index.js";
import typesData from '../../assets/data/types';
import HomeMap from '../HomeMap/existing.js';

const CarTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View style = {{flex: 1}}>
        <HomeMap />
       {typesData.map((type) => (
        <CarTypeRow type = {type}/> ))}

        <Pressable onPress = {confirm} style = {{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center'
        }}> 
          <Text style= {{color: 'white', fontWeight: 'bold'}}> 
            Confirm Taxi
          </Text>
        </Pressable>
    </View>
  );
};

=======
import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import CarTypeRow from "../CarTypeRow/index.js";
import typesData from '../../assets/data/types';
import RouteMap from "../RouteMap/index.js";

const CarTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View style = {{flex: 1, flexDirection: 'column'}}>
      <RouteMap />
      {typesData.map((type) => (
        <CarTypeRow key={type.id} type = {type}/> ))}

        <Pressable onPress = {confirm} style = {{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center'
        }}> 

          <Text style= {{color: 'white', fontWeight: 'bold'}}> 
            Confirm Taxi
          </Text>

        </Pressable>

    </View>
  );
};

>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
export default CarTypes;