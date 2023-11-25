<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
=======
import * as Location from 'expo-location';
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead

import styles from './styles.js';
import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
<<<<<<< HEAD

=======
  const navigation = useNavigation();
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead

  useEffect(() => {
    if(originPlace &&destinationPlace) {
      console.warn('Redirected to results');
    }    
  }, [originPlace, destinationPlace]);
<<<<<<< HEAD
=======
  const getCurrentLocation = async () => {
    try {
      // Request permission to access location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        // Get current location using Expo's Location module
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setOriginPlace({
          data: {
            description: 'Current Location',
            geometry: { location: { lat: latitude, lng: longitude } },
          },
        });
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };


  useEffect(() => {
    getCurrentLocation();
  }, []);
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
<<<<<<< HEAD
            setOriginPlace({data, details});
=======
            setOriginPlace({ data, details });
>>>>>>> 5169938f49950f301d25435769dab435e0c4dead
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

      </View>
    </SafeAreaView>
  );
};

=======
import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles.js';
import PlaceRow from "./PlaceRow";
import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();
  
  const checkNavigation = () => {
    if(originPlace &&destinationPlace) {
      navigation.navigate("SearchResults", {originPlace, destinationPlace,}  )

  }
}

  useEffect(() => {
    checkNavigation(); 
  }, [originPlace, destinationPlace]);
  
  const getCurrentLocation = async () => {
    try {
      // Request permission to access location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        // Get current location using Expo's Location module
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setOriginPlace({
          data: {
            description: 'Current Location',
            geometry: { location: { lat: latitude, lng: longitude } },
          },
        });
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };


  useEffect(() => {
    getCurrentLocation();
  }, []);


  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBtFhohEE8jedn2NpX0HXa6JWIWhbCCapY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

      </View>
    </SafeAreaView>
  );

};

>>>>>>> 267a556a7a798f242ea33da7ecf502cdd5c7bbe3
export default DestinationSearch;