import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../componets/CustomeButton';

export default function MobileNumber({navigation}) {
  return (
    <ImageBackground
      source={require('../assest/bg_image.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textconatiner}>
            <Text>We'll send you a verification code.</Text>
            <Text>Just enter your phone number below</Text>
          </View>
          <Text>Phone Number</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'phone'} size={20} color={'#931314'} />
            <Text>{' +91 |'}</Text>
            <TextInput
              placeholder="1234567890"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <CustomButton
            title="Send Code"
            onPress={() => {
              navigation.navigate('Otp Verify');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#931314',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textconatiner: {
    marginVertical: 30,
  },
});
