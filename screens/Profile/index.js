import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Switch,
} from 'react-native';

const Profile = () => {
  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    // Add state properties for the special features
    cantHear: false,
    cantSee: false,
    inWheelchair: false,
  });

  const handleUpdate = () => {
    // Implement your update logic here
    console.log('Update button pressed');
  };

  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>
          {userData.fname} {userData.lname}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={userData.fname}
          onChangeText={(text) => setUserData({ ...userData, fname: text })}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Last Name"
          value={userData.lname}
          onChangeText={(text) => setUserData({ ...userData, lname: text })}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          style={styles.textInput}
        />
        <TextInput
          placeholder="City"
          value={userData.city}
          onChangeText={(text) => setUserData({ ...userData, city: text })}
          style={styles.textInput}
        />

        {/* Special feature */}
        <View style={styles.specialFeatureContainer}>
          <Text style={styles.specialFeatureText}>Special feature</Text>
          <View style={styles.subLineContainer}>
            <Text>I can't hear, only text</Text>
            <Switch
              value={userData.cantHear}
              onValueChange={(value) => setUserData({ ...userData, cantHear: value })}
            />
          </View>
          <View style={styles.subLineContainer}>
            <Text>I can't see, only hear</Text>
            <Switch
              value={userData.cantSee}
              onValueChange={(value) => setUserData({ ...userData, cantSee: value })}
            />
          </View>
          <View style={styles.subLineContainer}>
            <Text>I am in a wheelchair</Text>
            <Switch
              value={userData.inWheelchair}
              onValueChange={(value) => setUserData({ ...userData, inWheelchair: value })}
            />
          </View>
        </View>
        {/* End of Special features */}
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
 
  profileContainer: {
    marginTop: 0,
    alignItems: 'center',
    marginBottom: 0,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 15,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginBottom: 10,
    fontSize: 16,
    paddingVertical: 8,
  },
  specialFeatureContainer: {
    marginTop: 20,
  },
  specialFeatureText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  updateButton: {
    backgroundColor: '#A7E92F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Profile;