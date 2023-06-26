import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../componets/CustomeButton';
export default function Registration({navigation}) {
  return (
    <ImageBackground
      source={require('../../assest/bg_image.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assest/profile_Icon.png')}
              style={styles.image1}
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

          <View style={styles.checkbox}>
            <CheckBox />
            <Text styles={styles.tcCondition}>
              I Agree to the Term & Condition
            </Text>
          </View>

          <CustomButton
            title="Next"
            onPress={() => {
              navigation.navigate('Phone Number');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    marginTop: 100,
  },
  login: {
    fontWeight: 'bold',
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

  image1: {
    width: 100,
    height: 100,
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
  checkbox: {
    flexDirection: 'row',
    // margin: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
