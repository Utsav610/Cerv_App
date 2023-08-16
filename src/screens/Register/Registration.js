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
import CustomButton from '../../components/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../constants/Color';
import ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {storeFormData} from '../../store/action/action';
import Images from '../../constants/Images';

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

  const validateForm = () => {
    if (catererName.trim() === '') {
      alert('Please enter a valid caterer name.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const allData = {
        catererName,
        email,
        password,
        confirmPassword,
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
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to select images.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.showImagePicker(
          {
            title: 'Select Profile Picture',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          },
          response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              setImageUri(response.uri);
            }
          },
        );
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={styles.container}>
      {/* <View style={{flex: 1}}> */}
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image
            source={require('../../assest/bg.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
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
                value={email}
                onChangeText={setEmail}
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
                secureTextEntry={passwordVisible}
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
                  color={Color.blackColor}
                />
              </TouchableOpacity>
            </View>

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
