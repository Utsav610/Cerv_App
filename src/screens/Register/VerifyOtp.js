import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CustomButton from '../../componets/CustomeButton';
import Color from '../../Constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OtpInputs from 'react-native-otp-inputs';
import {useSelector} from 'react-redux';

export default function OTPScreen({navigation}) {
  const Role = useSelector(state => state.user.role);
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require('../../assest/bg_image.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.content}>
            <OtpInputs
              inputContainerStyles={styles.inputContainer}
              inputStyles={styles.input}
              // handleChangeInput={code => console.log(code)} // Handle OTP input change
              numberOfInputs={4} // Number of OTP inputs to display
              keyboardType="numeric"
            />

            <View style={styles.otpContainer}>
              <Text>
                Didn't Get Code?
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Phone Number');
                  }}>
                  <Text style={{color: Color.primaryColor}}> Resend Code</Text>
                </TouchableOpacity>
              </Text>
            </View>

            <CustomButton
              title="Verify Now"
              onPress={() => {
                if (Role === 'Customer') {
                  navigation.navigate('Login');
                } else if (Role === 'Caterer') {
                  navigation.navigate('Add Caterer Store Details');
                }
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
    marginBottom: 20,
  },
});
