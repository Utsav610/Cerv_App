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
import {BackHandler} from 'react-native';
import Images from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomerPersonalInfo({navigation}) {
  const [profileData, setProfileData] = useState({
    countryCode: '',
    email: '',
    image: '',
    name: '',
    phoneNumber: '',
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
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
      console.log(data.data);
      setProfileData({...data.data});
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const name = profileData.name;

  const handleSave = async () => {
    const data = {
      name,
    };
    const token = await AsyncStorage.getItem('token');

    console.log(token);
    try {
      const response = await fetch('http://43.204.219.99:8080/edit-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        console.log(response);
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error while updating profile:', error);
    }

    setIsEdit(false);
  };

  const onChangeText = (key, value) => {
    const temp = {...profileData};
    temp[key] = value;
    isEdit && setProfileData({...temp});
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
          <TextInput
            placeholder="john"
            style={styles.input}
            value={profileData.name}
            editable={isEdit}
            onChangeText={text => {
              onChangeText('name', text);
            }}
          />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name={'envelope'}
            size={20}
            color={Color.primaryColor}
          />
          <TextInput
            placeholder="john123@gmail.com"
            style={styles.input}
            value={profileData.email}
            editable={isEdit}
            onChangeText={text => {
              onChangeText('email', text);
            }}
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather name={'phone'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456789"
            style={styles.input}
            value={profileData.phoneNumber}
            editable={isEdit}
            onChangeText={text => {
              onChangeText('phoneNumber', text);
            }}
          />
        </View>

        <Text style={styles.label}> Home Postcode</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'home'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456"
            style={styles.input}
            editable={isEdit}
          />
        </View>
        {/* {console.log('name ', profileData?.data?.name)} */}
        <View style={styles.btnContainer}>
          {/* <CustomButton
            title="Edit Information"
            onPress={() => {
              navigation.navigate('Edit information', {
                name: profileData?.data?.name,
              });
            }}
          /> */}
          {isEdit ? (
            <CustomButton title="Save" onPress={handleSave} />
          ) : (
            <CustomButton
              title="Edit information"
              onPress={() => setIsEdit(true)}
            />
          )}
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
