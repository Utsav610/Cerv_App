import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../customeButton';
import Color from '../../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';
import Images from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomerPersonalInfo({navigation}) {
  const [profileData, setProfileData] = useState({});
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch('http://43.204.219.99:8080/profile', {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView>
        <View style={styles.imageContainer}>
          <Image source={Images.PROFILE} style={styles.image1} />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <FontAwesome5 name={'camera'} size={20} color={Color.whiteColor} />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Caterer Name</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'user'} size={20} color={Color.primaryColor} />
          <View style={styles.input}>
            <Text style={styles.text}>{profileData?.data?.name}</Text>
          </View>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name={'envelope'}
            size={20}
            color={Color.primaryColor}
          />
          <View style={styles.input}>
            <Text style={styles.text}>{profileData?.data?.email}</Text>
          </View>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather name={'phone'} size={20} color={Color.primaryColor} />
          {/* <TextInput
            placeholder="123456789"
            style={styles.input}
            value={allData.phoneNumber}
          /> */}
          <View style={styles.input}>
            <Text style={styles.text}>{profileData?.data?.phoneNumber}</Text>
          </View>
        </View>

        <Text style={styles.label}> Home Postcode</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'home'} size={20} color={Color.primaryColor} />
          <View style={styles.input}>
            <Text style={styles.text}>Postcode</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            title="Edit Information"
            onPress={() => {
              navigation.navigate('Edit information');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.accentColor,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  input: {
    paddingVertical: 10,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  image1: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    // width: '100%',
    marginTop: '15%',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 100,
    backgroundColor: Color.primaryColor,
    padding: 5,
    borderRadius: 15,
  },
  text: {
    color: Color.blackColor,
  },
});
