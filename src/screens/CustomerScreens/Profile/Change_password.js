import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Change_password({navigation}) {
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

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setnewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmpasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleCurrentPasswordVisibility = () => {
    setnewPasswordVisible(!newPasswordVisible);
  };

  const toggleConformPasswordVisibility = () => {
    setConfirmpasswordVisible(!confirmPasswordVisible);
  };

  const handleSave = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if (newPassword !== confirmPassword) {
      alert("New password and Confirm password don't match.");
      return;
    }

    const requestData = {
      currentPassword: password,
      newPassword: newPassword,
    };

    try {
      const response = await fetch(
        'http://43.204.219.99:8080/users/changePassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JSON.parse(token),
          },
          body: JSON.stringify(requestData),
        },
      );
      console.log('response', response);

      if (response.ok) {
        navigation.navigate('Profile');
      } else {
        alert('Password change failed. Please check your input.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View>
            <View style={styles.passContainer}>
              <Text>Current Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={passwordVisible}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                />
                <FontAwesome5
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#333"
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                />
              </View>
            </View>
            <View style={styles.passContainer}>
              <Text>New Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="New Password"
                  secureTextEntry={newPasswordVisible}
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <FontAwesome5
                  name={newPasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#333"
                  onPress={toggleCurrentPasswordVisibility}
                  style={styles.eyeIcon}
                />
              </View>
            </View>
            <View style={styles.passContainer}>
              <Text>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={confirmPasswordVisible}
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <FontAwesome5
                  name={confirmPasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#333"
                  onPress={toggleConformPasswordVisibility}
                  style={styles.eyeIcon}
                />
              </View>
            </View>
          </View>
          <CustomButton
            title={'Save'}
            onPress={() => {
              handleSave();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#931314',
    borderRadius: 5,
    marginBottom: 3,
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },
  passContainer: {
    marginBottom: 25,
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  eyeIcon: {
    padding: 10,
  },
});
