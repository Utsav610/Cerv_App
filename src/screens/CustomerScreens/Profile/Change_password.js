import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Change_password() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.passContainer}>
          <Text>Current Password</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" style={styles.input} />
            <FontAwesome5
              name={secureTextEntry ? 'eye-slash' : 'eye'}
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
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
            <FontAwesome5
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#333"
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            />
          </View>
        </View>
        <View style={styles.passContainer}>
          <Text>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
            <FontAwesome5
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#333"
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            />
          </View>
        </View>
      </View>
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
