import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../customeButton';
import Color from '../../constants/Color';
import {Picker} from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../constants/Images';

export default function CatererPersonalInfo({navigation}) {
  const [profileData, setProfileData] = useState({});

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

  const [selectedKm, setSelectedKm] = useState(5);
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

  useEffect(() => {
    console.log('innnnn');
    AsyncStorage.getItem('userData')
      .then(async userData => {
        const {id} = JSON.parse(userData);
        console.log(id);
        const token = await AsyncStorage.getItem('token');
        console.log('token>>>', JSON.parse(token));

        fetch(`http://43.204.219.99:8080/catererInfo/${id}`, {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(token),
          },
        })
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            setProfileData(data);
          })
          .catch(error => {
            console.error('Error fetching catere data:', error);
          });
      })
      .catch(error => {
        console.log('Error retrieving userData:', error);
      });
  }, []);

  console.log('->>>', profileData);

  return (
    <>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={Images.PROFILE} style={styles.image1} />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <FontAwesome5 name={'camera'} size={20} color={Color.whiteColor} />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Caterer Name</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'user'} size={20} color={Color.primaryColor} />
          <View style={styles.input}>
            <Text style={styles.text}>
              {profileData?.caterer?.caterer?.name}
            </Text>
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
            <Text style={styles.text}>
              {profileData?.caterer?.caterer?.email}
            </Text>
          </View>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather name={'phone'} size={20} color={Color.primaryColor} />
          <View style={styles.input}>
            <Text style={styles.text}>
              {profileData?.caterer?.caterer?.phone_number}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>OrderType</Text>
          <Text style={styles.headerText}>{profileData?.orderType}</Text>
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
          <Text style={styles.textInput}>{profileData?.licenseNumber}</Text>
          <View>
            <Text>Business License Photo</Text>
            <Image
              source={require('../../assest/license.jpeg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.label}>Address</Text>

          <Text style={styles.textInput}>{profileData?.caterer?.address}</Text>
          <Text style={styles.label}>Bio</Text>

          <Text style={styles.textInput}>{profileData?.caterer?.bio}</Text>
        </View>
        <View>
          <View>
            <Text style={styles.headerText}>Driver Info</Text>
          </View>
          <Text>Driver Name</Text>

          <Text style={styles.textInput}>{profileData?.driverName}</Text>
          <Text>Driver License Number</Text>

          <Text style={styles.textInput}>{profileData?.driverLicenseNum}</Text>
          <Text>Driver License Photo</Text>
          <Image source={Images.DRIVER_LICENSE} style={styles.image} />
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
    color: Color.blackColor,
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
    marginBottom: 5,
  },
});
