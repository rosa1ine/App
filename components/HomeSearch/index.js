import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles.js';

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const navigateToDestinationSearch = () => {
    navigation.navigate('DestinationSearch'); // Replace with your actual screen name
  };

  return (
    <View style= {styles.container}>
      

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <FontAwesome name={'eur'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>2,050, cash</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#A7E92F'}]}>
          <MaterialIcons name={'comment'} size={20} color={'#F2F7F9'} />
        </View>
        <Text style={styles.destinationText}>Comments</Text>
      </View>

      {/* Pressable Input Box */}
      <Pressable onPress={navigateToDestinationSearch}>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Find a driver</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HomeSearch;