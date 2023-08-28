import React, {useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {storeFormData} from '../../store/action/action';
import Images from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditCustomerInfo({navigation, route}) {
  const {name} = route;

  const dispatch = useDispatch();
  const allData = useSelector(state => state.RegisterData);
  const [catererName, setCatererName] = useState(allData.catererName);
  const [email, setEmail] = useState(allData.email);
  const [phoneNumber, setPhoneNumber] = useState(allData.phoneNumber);
  const [homePostcode, setHomePostcode] = useState('');

  const handleSubmit = () => {
    const data = {
      catererName,
      email,
      phoneNumber,
    };
    dispatch(storeFormData(data));
    navigation.navigate('Personal information');
  };

  // const handleSubmit = async () => {
  //   const data = {
  //     name
  //   };

  //   try {
  //     const response = await fetch('http://43.204.219.99:8080/edit-profile', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //
  //       navigation.navigate('Personal information');
  //     } else {
  //
  //       console.error('Failed to update profile');
  //     }
  //   } catch (error) {
  //     console.error('Error while updating profile:', error);
  //   }
  // };

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
            value={catererName}
            onChangeText={text => {
              setCatererName(text);
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
            value={email}
            keyboardType="email-address"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'phone'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456789"
            value={phoneNumber}
            style={styles.input}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
        </View>

        <Text style={styles.label}> Home Postcode</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'home'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.btnContainer}>
        <CustomButton
          title="Save"
          // onPress={() => {
          //   navigation.navigate('Personal information');
          // }}

          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
    flex: 1,
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
    width: '100%',
    marginTop: 'auto',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 100,
    backgroundColor: Color.primaryColor,
    padding: 5,
    borderRadius: 15,
  },
});
