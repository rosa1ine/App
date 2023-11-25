<<<<<<< HEAD
import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';
import Ionicons from "react-native-vector-icons/Ionicons";


const CarTypeRow = (props) => {
  const { type } = props;


  const getImage =() => {
    if (type.type == 'UberX') {
      return require('../../assets/images/UberX.jpeg')
    }
    if (type.type == 'Comfort') {
      return require('../../assets/images/Comfort.jpeg')
    }
    
    return require('../../assets/images/UberXL.jpeg')
    
  }
  return (
    <View style={styles.container}>
      {/* Image */}
      {/* Note: Adjust the image source based on your requirements */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
         10 min
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. {type.price}</Text>
      </View>
    </View>
  );
};

export default CarTypeRow;
=======
import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';
import Ionicons from "react-native-vector-icons/Ionicons";


const CarTypeRow = (props) => {
  const { type } = props;


  const getImage =() => {
    if (type.type == 'UberX') {
      return require('../../assets/images/UberX.jpeg')
    }
    if (type.type == 'Comfort') {
      return require('../../assets/images/Comfort.jpeg')
    }
    
    return require('../../assets/images/UberXL.jpeg')
    
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      {/* Note: Adjust the image source based on your requirements */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
         10 min
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. {type.price}</Text>
      </View>
      
    </View>
  );
};

export default CarTypeRow;
>>>>>>> 6ad53b49086065c249b79f74f14a7ff22a4ffe51
