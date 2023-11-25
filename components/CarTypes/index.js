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

export default CarTypes;