import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CustomButton from '../../components/customeButton';
import Color from '../../constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OtpInputs from '@twotalltotems/react-native-otp-input';
import {useSelector} from 'react-redux';
import Images from '../../constants/Images';
import {Register, verifyOTP} from '../../services/Auth';

export default function OTPScreen({navigation, number}) {
  const Role = useSelector(state => state.user.role);
  const registration = useSelector(state => state.RegisterData);
  const [otp, setOtp] = useState('');

  // const validateOtp = () => {
  //   const url = 'http://43.204.219.99:8080/users/verifyOTP';
  //   const requestBody = {
  //     otpValue: otp,
  //     phone_number: registration.phoneNumber,
  //     country_code: '+91',
  //   };

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then(async res => {
  //       const response = await res.json();

  //       if (response.status === 1) {
  //         registrationApi();
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  const validateOtp = async () => {
    const isVerified = await verifyOTP(
      otp,
      registration.phoneNumber,
      registration.country_code,
    );

    if (isVerified) {
      registrationApi();
    } else {
      console.log('OTP verification failed');
    }
  };

  const registrationApi = () => {
    const url = 'http://43.204.219.99:8080/users/register';
    const requestBody = {
      email: registration.email,
      password: registration.password,
      name: registration.catererName,
      role: Role === 'Customer' ? 1 : 0,
      image: '',
      phone_number: registration.phoneNumber,
      country_code: registration.country_code,
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
          if (Role === 'Customer') {
            navigation.navigate('Login');
          } else if (Role === 'Caterer') {
            navigation.navigate('Add Caterer Store Details');
          }
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={Images.BG}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.content}>
            <OtpInputs
              style={styles.inputContainer}
              codeInputFieldStyle={styles.input}
              pinCount={4}
              keyboardType="numeric"
              onCodeChanged={code => setOtp(code)}
              value={otp}
            />
            <View style={[styles.otpContainer, {flexDirection: 'row'}]}>
              <View>
                <Text>Did not get Code ?</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Phone Number');
                  }}>
                  <Text style={styles.text}>Resend Code</Text>
                </TouchableOpacity>
              </View>
            </View>

            <CustomButton
              title="Verify Now"
              onPress={() => {
                validateOtp();
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 0,
    // margin: 0,
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 15,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Add this line
    marginBottom: 20,
    // marginTop: 10,
  },
  text: {
    color: Color.primaryColor,
    marginLeft: 5,
    fontWeight: 'bold',
    // paddingTop: 10,f
  },
});
