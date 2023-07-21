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
        source={require('../../assest/bg.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.content}>
            <OtpInputs
              inputContainerStyles={styles.inputContainer}
              inputStyles={styles.input}
              numberOfInputs={4}
              keyboardType="numeric"
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
