/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import {storeMobile} from '../../store/action/action';
import {useDispatch} from 'react-redux';
import Images from '../../constants/Images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MobileNumber({navigation}) {
  const dispatch = useDispatch();
  const [number, setnumber] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCode, setSelectedCode] = useState('+91');

  const countryCodes = ['+91', '+1', '+44', '+81'];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectCode = code => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  const validateNumber = () => {
    const url = 'http://43.204.219.99:8080/users/generateOTP';
    const requestBody = {
      country_code: selectedCode,
      phone_number: number,
      channel: 'sms',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(async res => {
        const response = await res.json();
        if (response.status === 1) {
          navigation.navigate('Otp Verify', {number: number});
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={Images.BG} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.content}>
          <View style={styles.textconatiner}>
            <Text>We'll send you a verification code.</Text>
            <Text>Just enter your phone number below</Text>
          </View>
          <Text>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Feather name={'phone'} size={20} color={Color.primaryColor} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={toggleDropdown}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>{selectedCode}</Text>
                  <Icon name={'menu-down'} size={20} color={Color.blackColor} />
                </View>
              </TouchableOpacity>
              {showDropdown && (
                <View
                  style={{
                    position: 'absolute',
                    top: 30,
                    left: 0,
                    backgroundColor: Color.whiteColor,
                  }}>
                  {countryCodes.map(code => (
                    <TouchableOpacity
                      key={code}
                      onPress={() => selectCode(code)}
                      style={{paddingVertical: 5}}>
                      <Text>{code}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <Text>{'|'}</Text>
            </View>
            <TextInput
              placeholder="1234567890"
              style={styles.input}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={text => {
                setnumber(text);
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              alignSelf: 'center',
            }}>
            <CustomButton
              title="Send Code"
              onPress={() => {
                dispatch(storeMobile(number, selectedCode));
                validateNumber();
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    height: 150,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.accentColor,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
  },
  textconatiner: {
    marginVertical: 30,
  },
});
