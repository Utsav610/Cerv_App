// /* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import Color from '../../Constants/Color';
// import {useSelector} from 'react-redux';

// export default function Login({navigation, route}) {
//   const Role = useSelector(state => state.user.role);
//   console.log(Role);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleLogin = () => {
//     if (Role === 'Customer') {
//       navigation.navigate('Home');
//     } else if (Role === 'Caterer') {
//       navigation.navigate('CatereLogin');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <ImageBackground
//         source={require('../../assest/bg_image.jpeg')}
//         resizeMode="cover"
//         style={styles.image}>
//         <View style={styles.container}>
//           <View style={styles.content}>
//             <Text style={styles.login}>Login</Text>
//             <Text style={styles.loginContent}>
//               Login to your account or Register below
//             </Text>

//             <View>
//               <Text style={{color: '#8e8e8e'}}>Email</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name={'envelope'}
//                   size={20}
//                   color={Color.primaryColor}
//                 />
//                 <TextInput
//                   placeholder="john123@gmail.com"
//                   style={styles.input}
//                 />
//               </View>

//               <Text style={{color: '#8e8e8e'}}>Password</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name={'lock'}
//                   size={20}
//                   color={Color.primaryColor}
//                 />
//                 <TextInput
//                   placeholder="Password"
//                   secureTextEntry={!passwordVisible}
//                   style={styles.input}
//                   value={password}
//                   onChangeText={setPassword}
//                 />
//                 <TouchableOpacity
//                   onPress={togglePasswordVisibility}
//                   style={styles.eyeIconContainer}>
//                   <FontAwesome5
//                     name={passwordVisible ? 'eye' : 'eye-slash'}
//                     size={20}
//                     color={'#c2c2c2'}
//                   />
//                 </TouchableOpacity>
//               </View>

//               <TouchableOpacity
//                 style={styles.Fpassword}
//                 onPress={() => {
//                   navigation.navigate('Forget Password');
//                 }}>
//                 <Text style={styles.text}>Forget Password ?</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.customButton}
//                 onPress={handleLogin}>
//                 <Text style={styles.customButtonText}>Login</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.orContainer}>
//               <View style={styles.line} />
//               <Text style={styles.orText}>OR</Text>
//               <View style={styles.line} />
//             </View>

//             <View style={styles.registerContainer}>
//               <Text>Don't have an Account ?</Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate('Register');
//                 }}>
//                 <Text style={styles.registerText}>Register</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: '54%',
//   },
//   login: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
//   loginContent: {
//     marginBottom: 25,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: Color.accentColor,
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   registerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   registerText: {
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   orContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 30,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#000',
//   },
//   orText: {
//     marginHorizontal: 10,
//   },
//   content: {
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     elevation: 10,
//   },
//   Fpassword: {
//     marginBottom: 15,
//     flexDirection: 'row-reverse',
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#000',
//   },
//   eyeIconContainer: {
//     position: 'absolute',
//     right: 10,
//   },
//   customButton: {
//     marginTop: 10,
//     backgroundColor: Color.primaryColor,
//     borderRadius: 8,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   customButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

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
import Color from '../../Constants/Color';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackHandler} from 'react-native';

export default function Login({navigation, route}) {
  const Role = useSelector(state => state.user.role);
  const login = useSelector(state => state.RegisterData);
  // console.log(login);
  const useremail = login.email;
  // console.log(useremail);
  const userpassword = login.password;
  // console.log(userpassword);

  // console.log(Role);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  // console.log(email);

  const handleLogin = async () => {
    await fetchData();
    if (
      Role === 'Customer' &&
      validateEmail(email) &&
      validatePassword(password)
      //  && useremail === email
    ) {
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('Role', Role);
      } catch (error) {
        console.log('Error storing data:', error);
      }

      navigation.navigate('Home Navigation');
    } else if (
      Role === 'Caterer' &&
      validateEmail(email) &&
      validatePassword(password)
      //  && userpassword === password
    ) {
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('Role', Role);
      } catch (error) {
        console.log('Error storing data:', error);
      }

      navigation.navigate('CatereLogin');
    } else {
      console.log('Invalid credentials');
    }
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

  const fetchData = async () => {
    try {
      const url = 'https://cerv-api.herokuapp.com/users/login';
      const requestBody = {
        email: email,
        password: password,
        role: 1,
      };

      const response = await fetch(url, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
                  color={'#000'}
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
    backgroundColor: '#000',
  },
  orText: {
    marginHorizontal: 10,
  },
  Fpassword: {
    marginBottom: 15,
    flexDirection: 'row-reverse',
  },

  text: {
    color: '#000',
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
