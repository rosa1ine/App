import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles.js';

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const navigateToDestinationSearch = () => {
    navigation.navigate('DestinationSearch'); // Replace with your actual screen name
  };

  return (
    <View style= {styles.container}>
      {/* Pressable Input Box */}
      <Pressable onPress={navigateToDestinationSearch}>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Where To?</Text>
          <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16} />
          </View>
        </View>
      </Pressable>

     
      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Work</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
