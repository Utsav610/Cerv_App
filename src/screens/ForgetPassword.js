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
            <Text style={styles.text}>
              Please enter the email address below, you will receive a link to
              create a new password via email
            </Text>
          </View>
          <Text>Email</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'envelope'} size={20} color={'#931314'} />

            <TextInput placeholder="john123@gmail.com" style={styles.input} />
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
    borderColor: '#F5694E',
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
    fontSize: 20,
    marginVertical: 30,
  },
  text: {fontSize: 16},
});
