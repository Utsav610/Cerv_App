import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../componets/CustomeButton';

export default function Registration({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assest/profile_Icon.png')}
          style={styles.image1}
        />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <FontAwesome5 name={'camera'} size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Caterer Name</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name={'user'} size={20} color={'#931314'} />
        <TextInput placeholder="john" style={styles.input} />
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name={'envelope'} size={20} color={'#931314'} />
        <TextInput
          placeholder="john123@gmail.com"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name={'phone'} size={20} color={'#931314'} />
        <TextInput
          placeholder="123456789"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Text style={styles.label}> Home Postcode</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name={'home'} size={20} color={'#931314'} />
        <TextInput placeholder="123456" secureTextEntry style={styles.input} />
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          title="Edit Information"
          onPress={() => {
            navigation.navigate('Phone Number');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccc',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  image1: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 100,
    backgroundColor: '#F5694E',
    padding: 5,
    borderRadius: 15,
  },
});
