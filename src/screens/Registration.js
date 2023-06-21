import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Registration() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assest/profile_Icon.png')}
            style={styles.image}
          />
        </View>
        <Text>Caterer Name</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'user'} size={20} color={'#931314'} />
          <TextInput placeholder="john" style={styles.input} />
        </View>

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

        <Text>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'lock'} size={20} color={'#931314'} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  login: {
    fontWeight: 'bold',
  },
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FF7722',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#931314',
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
  },

  image: {
    width: 100,
    height: 100,
  },
});
