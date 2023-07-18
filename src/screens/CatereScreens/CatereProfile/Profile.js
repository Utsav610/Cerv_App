import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../Constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.navigate('role');
    } catch (error) {
      console.log('Error removing data:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assest/profile_Icon.png')}
          style={styles.image}
        />
      </View>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Personal information');
        }}>
        <FontAwesome5 name="user" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Personal Information</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Payment Method');
        }}>
        <FontAwesome5 name="credit-card" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Payment Method</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Discount Codes');
        }}>
        <FontAwesome5 name="tag" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Discount Codes</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          navigation.navigate('Change Password');
        }}>
        <FontAwesome5 name="lock" size={20} color={Color.primaryColor} />
        <Text style={styles.optionText}>Change Password</Text>
        <FontAwesome5 name="angle-right" size={20} color="#cccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleLogout}>
        <FontAwesome5
          name="sign-out-alt"
          size={20}
          color={Color.primaryColor}
        />
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
