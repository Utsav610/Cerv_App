/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../Constants/Color';
import ImagePicker from 'react-native-image-picker';

export default function Registration({navigation}) {
  const [isChecked, setIsChecked] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [CurrentpasswordVisible, setCurrentpasswordVisible] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleCurrentPasswordVisibility = () => {
    setCurrentpasswordVisible(!CurrentpasswordVisible);
  };

  const selectImage = () => {
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
              <Image
                source={require('../../assest/profile_Icon.png')}
                style={styles.image1}
              />
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
              <TextInput placeholder="john" style={styles.input} />
            </View>

            <Text>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name={'envelope'}
                size={20}
                color={Color.primaryColor}
              />
              <TextInput placeholder="john123@gmail.com" style={styles.input} />
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
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIconContainer}>
                <FontAwesome5
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color={'#000'}
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
              />
              <TouchableOpacity
                onPress={toggleCurrentPasswordVisibility}
                style={styles.eyeIconContainer}>
                <FontAwesome5
                  name={CurrentpasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color={'#000'}
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
              navigation.navigate('Phone Number');
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
  // content: {
  //   flex: 3,
  //   backgroundColor: 'white',
  //   paddingHorizontal: 20,
  //   paddingTop: 20,
  //   borderTopLeftRadius: 50,
  //   borderTopRightRadius: 50,
  //   elevation: 10,
  // },
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
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
    elevation: 20,
  },
});

// /* eslint-disable react-native/no-inline-styles */
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import React, {useState} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import CheckBox from '@react-native-community/checkbox';
// import CustomButton from '../../componets/CustomeButton';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import Color from '../../Constants/Color';
// import ImagePicker from 'react-native-image-picker';

// export default function Registration({navigation}) {
//   const [isChecked, setIsChecked] = useState(false);
//   const [imageUri, setImageUri] = useState(null);

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [CurrentpasswordVisible, setCurrentpasswordVisible] = useState(false);

//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   const toggleCurrentPasswordVisibility = () => {
//     setCurrentpasswordVisible(!CurrentpasswordVisible);
//   };

//   const selectImage = () => {
//     ImagePicker.showImagePicker(
//       {
//         title: 'Select Profile Picture',
//         storageOptions: {
//           skipBackup: true,
//           path: 'images',
//         },
//       },
//       response => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else {
//           setImageUri(response.uri);
//         }
//       },
//     );
//   };

//   return (
//     <ImageBackground
//       source={require('../../assest/bg_image.jpeg')}
//       resizeMode="cover"
//       style={styles.image}>
//       <KeyboardAwareScrollView>
//         <View style={styles.container}>
//           <View style={{flex: 2}}></View>
//           <View style={styles.content}>
//             <View style={styles.imageContainer}>
//               {imageUri ? (
//                 <Image source={{uri: imageUri}} style={styles.image1} />
//               ) : (
//                 <Image
//                   source={require('../../assest/profile_Icon.png')}
//                   style={styles.image1}
//                 />
//               )}
//               <TouchableOpacity
//                 style={styles.cameraIconContainer}
//                 onPress={selectImage}>
//                 <FontAwesome5
//                   name={'plus'}
//                   size={15}
//                   color={Color.primaryColor}
//                 />
//               </TouchableOpacity>
//             </View>
//             <Text>Caterer Name</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5
//                 name={'user'}
//                 size={20}
//                 color={Color.primaryColor}
//               />
//               <TextInput placeholder="john" style={styles.input} />
//             </View>

//             <Text>Email</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5
//                 name={'envelope'}
//                 size={20}
//                 color={Color.primaryColor}
//               />
//               <TextInput placeholder="john123@gmail.com" style={styles.input} />
//             </View>

//             <Text>Password</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5
//                 name={'lock'}
//                 size={20}
//                 color={Color.primaryColor}
//               />
//               <TextInput
//                 placeholder="Password"
//                 secureTextEntry={passwordVisible}
//                 style={styles.input}
//               />
//               <TouchableOpacity
//                 onPress={togglePasswordVisibility}
//                 style={styles.eyeIconContainer}>
//                 <FontAwesome5
//                   name={passwordVisible ? 'eye-slash' : 'eye'}
//                   size={20}
//                   color={'#c2c2c2'}
//                 />
//               </TouchableOpacity>
//             </View>

//             <Text>Confirm Password</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5
//                 name={'lock'}
//                 size={20}
//                 color={Color.primaryColor}
//               />

//               <TextInput
//                 placeholder="Password"
//                 secureTextEntry={CurrentpasswordVisible}
//                 style={styles.input}
//               />
//               <TouchableOpacity
//                 onPress={toggleCurrentPasswordVisibility}
//                 style={styles.eyeIconContainer}>
//                 <FontAwesome5
//                   name={CurrentpasswordVisible ? 'eye-slash' : 'eye'}
//                   size={20}
//                   color={'#c2c2c2'}
//                 />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.checkbox}>
//               <CheckBox value={isChecked} onValueChange={toggleCheckbox} />
//               <View style={{paddingRight: 10}}>
//                 <Text style={styles.tcCondition}>
//                   I Agree to the{' '}
//                   <Text style={{color: Color.primaryColor, fontWeight: 600}}>
//                     Term & Condition
//                   </Text>{' '}
//                   and{' '}
//                   <Text style={{color: Color.primaryColor, fontWeight: 600}}>
//                     Privacy Policy
//                   </Text>
//                 </Text>
//               </View>
//             </View>

//             <CustomButton
//               title="Next"
//               onPress={() => {
//                 navigation.navigate('Phone Number');
//               }}
//             />
//           </View>
//         </View>
//       </KeyboardAwareScrollView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingHorizontal: 20,
//     marginTop: '28%',
//   },
//   login: {
//     fontWeight: 'bold',
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: Color.accentColor,
//     borderRadius: 5,
//     paddingVertical: 1,
//     paddingHorizontal: 10,
//     marginBottom: 5,
//   },
//   input: {
//     marginLeft: 10,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 10,
//     position: 'relative',
//   },

//   image1: {
//     width: 100,
//     height: 100,
//   },
//   content: {
//     flex: 3,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     elevation: 10,
//   },
//   checkbox: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 10,
//   },
//   image: {
//     // flex: 1,
//     justifyContent: 'center',
//   },
//   eyeIconContainer: {
//     position: 'absolute',
//     right: 10,
//   },
//   tcCondition: {
//     flex: 1,
//     flexWrap: 'wrap',
//     fontSize: 17,
//   },
//   cameraIconContainer: {
//     position: 'absolute',
//     bottom: 5,
//     right: 100,
//     backgroundColor: '#fff',
//     padding: 5,
//     borderRadius: 50,
//     elevation: 20,
//   },
// });
