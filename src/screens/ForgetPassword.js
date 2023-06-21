import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MobileNumber({navigation}) {
  return (
    <ImageBackground
      source={require('../assest/bg_image.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Phone Number</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5 name={'envelope'} size={20} color={'#931314'} />

            <TextInput placeholder="john123@gmail.com" style={styles.input} />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Otp Verify');
            }}>
            <Text style={styles.btnText}>Send Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    marginTop: 150,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#931314',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
