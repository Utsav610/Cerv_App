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
export default function Login({navigation}) {
  return (
    <ImageBackground
      source={require('../assest/bg_image.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        {/* <ImageBackground
        source={require('../assest/bg_image.jpeg')}
        style={styles.bgimg}
      /> */}
        <View style={styles.content}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.loginContent}>
            Login to your account or Register below
          </Text>

          <View>
            <Text>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5 name={'envelope'} size={20} color={'#931314'} />
              <TextInput placeholder="john123@gmail.com" style={styles.input} />
            </View>

            <Text>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5 name={'lock'} size={20} color={'#931314'} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
              />
            </View>

            <TouchableOpacity
              style={styles.Fpassword}
              onPress={() => {
                navigation.navigate('Forget Password');
              }}>
              <Text>Forget Password ?</Text>
            </TouchableOpacity>

            <CustomButton
              title="Login"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.registerContainer}>
            <Text>Don't have an Account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
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
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  loginContent: {
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#931314',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  orText: {
    marginHorizontal: 10,
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
  Fpassword: {
    marginBottom: 15,
    flexDirection: 'row-reverse',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
