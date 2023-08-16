import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import GlobalStyle from '../utils/GlobalStyle';
import Color from '../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation}) {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const Role = await AsyncStorage.getItem('Role');

        if (isLoggedIn === 'true' && Role === 'Customer') {
          navigation.replace('Home Navigation');
        } else if (isLoggedIn === 'true' && Role === 'Caterer') {
          navigation.replace('CatereLogin');
        } else {
          navigation.replace('role');
        }
      } catch (error) {
        console.log('Error retrieving data:', error);
        navigation.replace('role');
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>CERV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryColor,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: Color.whiteColor,
  },
});
