import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CustomButton from '../../componets/CustomeButton';
export default function OTPScreen() {
  return (
    <ImageBackground
      source={require('../../assest/bg_image.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.otpContainer}>
            <Text>
              Didn't Get Code?{' '}
              <Text style={{color: '#FF7722'}}> Resend Code</Text>
            </Text>
          </View>

          <CustomButton title="Verify Now" />
        </View>
      </View>
    </ImageBackground>
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
    alignSelf: 'center',
    width: 200,
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
