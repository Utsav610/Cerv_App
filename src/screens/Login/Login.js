import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../Constants/Color';

export default function Login({navigation, route}) {
  const Role = route.params.role;
  console.log(Role);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (Role === 'Customer') {
      navigation.navigate('Home');
    } else if (Role === 'Caterer') {
      navigation.navigate('CatereLogin');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require('../../assest/bg_image.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container}>
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
                    name={passwordVisible ? 'eye-slash' : 'eye'}
                    size={20}
                    color={'#c2c2c2'}
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
                onPress={handleLogin}>
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
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '55%',
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
