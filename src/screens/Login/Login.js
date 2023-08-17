// /* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../constants/Color';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackHandler} from 'react-native';

export default function Login({navigation, route}) {
  const Role = useSelector(state => state.user.role);
  const login = useSelector(state => state.RegisterData);
  const useremail = login.email;
  const userpassword = login.password;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

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

  const handleLogin = async () => {
    const url = 'http://43.204.219.99:8080/users/login';
    const requestBody = {
      email: email,
      password: password,
      role: Role === 'Customer' ? 1 : 0,
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
        console.log(response);

        if (response.status === 1) {
          if (response.user.role === 1) {
            navigation.navigate('Home Navigation');
          } else if (response.user.role === 0) {
            navigation.navigate('CatereLogin');
          }
          try {
            await AsyncStorage.setItem(
              'userData',
              JSON.stringify(response.user),
            );

            await AsyncStorage.setItem('token', JSON.stringify(response.token));
          } catch (error) {
            console.log('Error storing user data:', error);
          }
        } else {
          if (
            response.status === 0 &&
            response.message ===
              'Register your store and get verified by admin!'
          ) {
            navigation.navigate('Add Caterer Store Details', {
              userId: response.userId,
            });
          }
        }
      })
      .catch(err => console.log(err));
  };

  const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Password validation function
  const validatePassword = password => {
    return password.length >= 6;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image
            source={require('../../assest/bg.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.loginContent}>
            Login to your account or Register below
          </Text>

          <View>
            <Text>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'envelope'}
                size={20}
                color={Color.primaryColor}
              />
              <TextInput
                placeholder="john123@gmail.com"
                style={styles.input}
                onChangeText={setemail}
              />
            </View>

            <Text>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'lock'}
                size={20}
                color={Color.primaryColor}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIconContainer}>
                <FontAwesome5
                  name={passwordVisible ? 'eye' : 'eye-slash'}
                  size={20}
                  color={Color.blackColor}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.Fpassword}
              onPress={() => {
                navigation.navigate('Forget Password');
              }}>
              <Text style={styles.text}>Forget Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={handleLogin}
              disabled={!validateEmail(email) || !validatePassword(password)}>
              <Text style={styles.customButtonText}>Login</Text>
            </TouchableOpacity>
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
    borderColor: Color.accentColor,
    marginBottom: 10,
  },
  input: {
    flex: 1,
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
    backgroundColor: Color.blackColor,
  },
  orText: {
    marginHorizontal: 10,
  },
  Fpassword: {
    marginBottom: 15,
    flexDirection: 'row-reverse',
  },

  text: {
    color: Color.blackColor,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  customButton: {
    marginTop: 10,
    backgroundColor: Color.primaryColor,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonText: {
    color: Color.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
