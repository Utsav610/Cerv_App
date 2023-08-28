import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../../constants/Images';
// import Toast from 'react-native-toast-message';

const Profile = ({navigation}) => {
  const handleLogout = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch('http://43.204.219.99:8080/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
      console.log('log', response);
      if (response.ok) {
        await AsyncStorage.removeItem('isLoggedIn');
        // Toast.show({text1: 'SuccessFully logout'});
        navigation.navigate('role');
      }
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Toast
        ref={ref => {
          Toast.setRef(ref);
        }}
      /> */}
      <View style={styles.imageContainer}>
        <Image source={Images.PROFILE} style={styles.image} />
      </View>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Personal information');
        }}>
        <FontAwesome5 name="user" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Personal Information</Text>
        <FontAwesome5 name="angle-right" size={20} color={Color.accentColor} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Payment Method');
        }}>
        <FontAwesome5 name="credit-card" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Payment Method</Text>
        <FontAwesome5 name="angle-right" size={20} color={Color.accentColor} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Discount Codes');
        }}>
        <Icon name="brightness-percent" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Discount Codes</Text>
        <FontAwesome5 name="angle-right" size={20} color={Color.accentColor} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Change Password');
        }}>
        <Feather name="lock" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Change Password</Text>
        <FontAwesome5 name="angle-right" size={20} color={Color.accentColor} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleLogout}>
        <Feather name="log-out" size={20} color={Color.primaryColor} />
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
    backgroundColor: Color.whiteColor,
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
    borderBottomColor: Color.accentColor,
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
});

export default Profile;
