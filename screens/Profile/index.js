import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const Profile = () => {
  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    about: '',
    phone: '',
    country: '',
    city: '',
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
            source={{ uri: 'https://example.com/default-image.jpg' }}
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
        {/* Add more input fields as needed */}
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
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
  updateButton: {
    backgroundColor: '#2e64e5',
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