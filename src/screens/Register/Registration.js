/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../constants/Color';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {storeFormData} from '../../store/action/action';
import Images from '../../constants/Images';
import GetLocation from 'react-native-get-location';

export default function Registration({navigation}) {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [CurrentpasswordVisible, setCurrentpasswordVisible] = useState(false);

  const [catererName, setCatererName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ConfirmpasswordError, setConfirmPasswordError] = useState('');

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
    .then(location => {
      console.log(location);
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });

  const validateForm = () => {
    if (catererName.trim() === '') {
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    if (password !== confirmPassword) {
      return false;
    }

    if (!isChecked) {
      return false;
    }

    return true;
  };

  const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const allData = {
        catererName,
        email,
        password,
        confirmPassword,
        imageUri,
      };

      dispatch(storeFormData(allData));
      navigation.navigate('Phone Number');
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleCurrentPasswordVisibility = () => {
    setCurrentpasswordVisible(!CurrentpasswordVisible);
  };

  const selectImage = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setImageUri(image.path);
    });
  };

  return (
    <View style={styles.container}>
      {/* <View style={{flex: 1}}> */}
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={Images.BG} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            {imageUri ? (
              <Image source={{uri: imageUri}} style={styles.image1} />
            ) : (
              <Image source={Images.PROFILE} style={styles.image1} />
            )}
            <TouchableOpacity
              style={styles.cameraIconContainer}
              onPress={selectImage}>
              <FontAwesome5
                name={'plus'}
                size={15}
                color={Color.primaryColor}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Caterer Name</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'user'}
                size={20}
                color={Color.primaryColor}
              />
              <TextInput
                placeholder="john"
                style={styles.input}
                value={catererName}
                onChangeText={setCatererName}
              />
            </View>

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
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                onBlur={() => {
                  if (!validateEmail(email)) {
                    setEmailError('Invalid email');
                  }
                }}
              />
            </View>
            {emailError ? (
              <Text style={{color: 'red', fontSize: 12}}>{emailError}</Text>
            ) : null}

            <Text>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'lock'}
                size={20}
                color={Color.primaryColor}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={passwordVisible}
                style={styles.input}
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                onBlur={() => {
                  if (!validatePassword(password)) {
                    setPasswordError('Password must be at least 6 characters');
                  }
                }}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIconContainer}>
                <FontAwesome5
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color={Color.blackColor}
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={{color: 'red', fontSize: 12}}>{passwordError}</Text>
            ) : null}

            <Text>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'lock'}
                size={20}
                color={Color.primaryColor}
              />

              <TextInput
                placeholder="Password"
                secureTextEntry={CurrentpasswordVisible}
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onBlur={() => {
                  if (password !== confirmPassword) {
                    setConfirmPasswordError(
                      'password and confirmPassword are not same',
                    );
                  } else {
                    setConfirmPasswordError('');
                  }
                }}
              />
              <TouchableOpacity
                onPress={toggleCurrentPasswordVisibility}
                style={styles.eyeIconContainer}>
                <FontAwesome5
                  name={CurrentpasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color={Color.blackColor}
                />
              </TouchableOpacity>
            </View>
            {ConfirmpasswordError ? (
              <Text style={{color: 'red', fontSize: 12}}>
                {ConfirmpasswordError}
              </Text>
            ) : null}

            <View style={styles.checkbox}>
              <CheckBox value={isChecked} onValueChange={toggleCheckbox} />
              <View style={{paddingRight: 10}}>
                <Text style={styles.tcCondition}>
                  I Agree to the{' '}
                  <Text style={{color: Color.primaryColor, fontWeight: 600}}>
                    Term & Condition
                  </Text>{' '}
                  and{' '}
                  <Text style={{color: Color.primaryColor, fontWeight: 600}}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
            {!isChecked ? (
              <Text style={{color: 'red', fontSize: 12}}>
                {'Please check T&C'}
              </Text>
            ) : null}
          </View>

          <CustomButton
            title="Next"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      {/* </View> */}
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
    height: 100,
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
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.accentColor,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  input: {
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    position: 'relative',
  },

  image1: {
    width: 100,
    height: 100,
  },

  checkbox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  // image: {
  //   // flex: 1,
  //   justifyContent: 'center',
  // },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  tcCondition: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 17,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 100,
    backgroundColor: Color.whiteColor,
    padding: 5,
    borderRadius: 50,
    elevation: 20,
  },
});
