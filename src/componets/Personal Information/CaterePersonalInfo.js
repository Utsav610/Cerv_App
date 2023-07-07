import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../CustomeButton';
import Color from '../../Constants/Color';
import {Picker} from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';

export default function CaterePersonalInfo({navigation}) {
  const [selectedKm, setSelectedKm] = useState(5); // Default selected km
  const fees = {
    5: 10,
    10: 15,
    15: 20,
    20: 25,
    25: 30,
    30: 35,
  };
  const handleKmChange = km => {
    setSelectedKm(km);
  };

  return (
    <>
      <ScrollView>
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
          <FontAwesome5 name={'user'} size={20} color={Color.primaryColor} />
          <TextInput placeholder="john" style={styles.input} />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name={'envelope'}
            size={20}
            color={Color.primaryColor}
          />
          <TextInput
            placeholder="john123@gmail.com"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather name={'phone'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456789"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.headerText}>OrderType</Text>
          <Text style={styles.headerText}>Delivery</Text>
        </View>
        <View>
          <Text>Distance and fee</Text>
          <Picker selectedValue={selectedKm} onValueChange={handleKmChange}>
            {Object.entries(fees).map(([km, fee]) => (
              <Picker.Item
                key={km}
                label={`${km} km - $${fee}`}
                value={parseInt(km)}
              />
            ))}
          </Picker>
        </View>
        <View>
          <Text style={styles.headerText}>Business Info</Text>
        </View>
        <View>
          <Text style={styles.label}>Business License Number</Text>
          <TextInput style={styles.textInput} />
          <View>
            <Text>Business License Photo</Text>
            <Image
              source={require('../../assest/license.jpeg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.label}>Addres</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.label}>Bio</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <View>
            <Text style={styles.headerText}>Driver Info</Text>
          </View>
          <Text>Driver Name</Text>
          <TextInput style={styles.textInput} />
          <Text>Driver License Number</Text>
          <TextInput style={styles.textInput} />
          <Text>Driver License Photo</Text>
          <Image
            source={require('../../assest/Driver_license.jpeg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title="Edit Information"
          onPress={() => {
            navigation.navigate('Edit information');
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    paddingVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.accentColor,
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
    backgroundColor: Color.primaryColor,
    padding: 5,
    borderRadius: 15,
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 5,
  },
});
