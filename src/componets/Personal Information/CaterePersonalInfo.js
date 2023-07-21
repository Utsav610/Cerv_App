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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

export default function CaterePersonalInfo({navigation}) {
  const allData = useSelector(state => state.catereData);
  const registerData = useSelector(state => state.RegisterData);

  // Access individual data properties like this:
  const businessInfo = allData.businessInfo;
  const orderType = allData.orderType;
  const driverInfo = allData.driverInfo;

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
          <View style={styles.input}>
            <Text style={styles.text}>{registerData.catererName}</Text>
          </View>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name={'envelope'}
            size={20}
            color={Color.primaryColor}
          />
          <View style={styles.input}>
            <Text style={styles.text}>{registerData.email}</Text>
          </View>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather name={'phone'} size={20} color={Color.primaryColor} />
          <View style={styles.input}>
            <Text style={styles.text}>{registerData.phoneNumber}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>OrderType</Text>
          <Text style={styles.headerText}>{orderType}</Text>
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
          <TextInput
            style={styles.textInput}
            value={businessInfo.licenseNumber}
          />
          <View>
            <Text>Business License Photo</Text>
            <Image
              source={require('../../assest/license.jpeg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.label}>Addres</Text>
          <TextInput style={styles.textInput} value={businessInfo.address} />
          <Text style={styles.label}>Bio</Text>
          <TextInput style={styles.textInput} value={businessInfo.bio} />
        </View>
        <View>
          <View>
            <Text style={styles.headerText}>Driver Info</Text>
          </View>
          <Text>Driver Name</Text>
          <TextInput style={styles.textInput} value={driverInfo.driverName} />
          <Text>Driver License Number</Text>
          <TextInput
            style={styles.textInput}
            value={driverInfo.driverLicenseNum}
          />
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
    paddingVertical: 10,
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
