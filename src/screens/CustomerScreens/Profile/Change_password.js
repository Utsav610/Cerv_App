import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../components/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BackHandler} from 'react-native';

export default function Change_password({navigation}) {
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

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [CurrentpasswordVisible, setCurrentpasswordVisible] = useState(false);
  const [ConformpasswordVisible, setConformpasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleCurrentPasswordVisibility = () => {
    setCurrentpasswordVisible(!CurrentpasswordVisible);
  };

  const toggleConformPasswordVisibility = () => {
    setConformpasswordVisible(!ConformpasswordVisible);
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
                  placeholder="Password"
                  secureTextEntry={CurrentpasswordVisible}
                  style={styles.input}
                />
                <FontAwesome5
                  name={CurrentpasswordVisible ? 'eye-slash' : 'eye'}
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
                  placeholder="Password"
                  secureTextEntry={ConformpasswordVisible}
                  style={styles.input}
                />
                <FontAwesome5
                  name={ConformpasswordVisible ? 'eye-slash' : 'eye'}
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
              navigation.navigate('Profile');
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
