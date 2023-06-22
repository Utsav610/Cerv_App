import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assest/profile_Icon.png')}
          style={styles.image}
        />
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="user" size={20} color="#931314" />
        <Text style={styles.optionText}>Personal Information</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="credit-card" size={20} color="#931314" />
        <Text style={styles.optionText}>Payment Method</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="heart" size={20} color="#931314" />
        <Text style={styles.optionText}>My Favorites</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="location-dot" size={20} color="#931314" />
        <Text style={styles.optionText}>Saved Address</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="lock" size={20} color="#931314" />
        <Text style={styles.optionText}>Change Password</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <FontAwesome5 name="sign-out-alt" size={20} color="#931314" />
        <Text style={styles.optionText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: '#FFFF',
    elevation: 5,
  },
  profileText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
});

export default Profile;
