/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/customeButton';
import Color from '../../constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {storeCatereData} from '../../store/action/action';
import Images from '../../constants/Images';
import RadioButton from '../../components/radioButton';
import ImagePicker from 'react-native-image-crop-picker';
import GetLocation from 'react-native-get-location';

export default function AddStoreDetails({navigation, route}) {
  const userId = route?.params?.userId;
  const dispatch = useDispatch();

  const [licenseImage, setLicenseImage] = useState(null);
  const [DrivelicenseImage, setDriveLicenseImage] = useState(null);
  const [location, setLocation] = useState();

  const selectLicense = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setLicenseImage(image.path);
    });
  };

  const selectDriveLicense = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setDriveLicenseImage(image.path);
    });
  };

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  // console.log('location', location.altitude);

  const [businessInfo, setBusinessInfo] = useState({
    licenseNumber: '',
    // licensePhoto: '',
    address: '',
    bio: '',
  });

  const [driverInfo, setDriverInfo] = useState({
    driverName: '',
    driverLicenseNum: '',
  });

  // const [deliveryFee, setDeliveryFee] = useState('');
  const [selectedKm, setSelectedKm] = useState(5);
  const [selectedFoodCategories, setSelectedFoodCategories] =
    useState('chinese');
  const foodCategories = ['chinese', 'indian Thali', 'Italian', 'Korean'];
  const [orderType, setOrderType] = useState('delivery');

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

  const handleOrderTypeChange = type => {
    setOrderType(type);
  };

  const handleInputChange = (field, value) => {
    setBusinessInfo(prevBusinessInfo => ({
      ...prevBusinessInfo,
      [field]: value,
    }));
  };

  const handleDriverInputChange = (field, value) => {
    setDriverInfo(prevBusinessInfo => ({
      ...prevBusinessInfo,
      [field]: value,
    }));
  };

  const handleFoodCategoryChange = category => {
    setSelectedFoodCategories(category);
  };

  const handleSave = () => {
    const allData = {
      businessInfo,
      orderType,
      // deliveryFee,
      selectedKm,
      selectedFoodCategories,
      driverInfo,
    };

    dispatch(storeCatereData(allData));

    const formData = new FormData();
    formData.append('license_num', businessInfo.licenseNumber);
    formData.append('license_image', {
      uri: licenseImage,
      name: 'image.jpg',
      type: 'image/jpeg',
    });
    formData.append('address', businessInfo.address);
    formData.append('bio', businessInfo.bio);
    formData.append('latitude', location.latitude);
    formData.append('longitude', location.longitude);
    formData.append(
      'order_type',
      orderType === 'delivery' ? 0 : orderType === 'pickup' ? 1 : 2,
    );
    formData.append('category', selectedFoodCategories);
    formData.append('catererId', userId);

    const url = 'http://43.204.219.99:8080/users/storeDetails';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(async res => {
        const response = await res.json();
        console.log(response);
        if (response.status === 1) {
          navigation.navigate('Login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.headerText}>Business Info</Text>
          </View>
          <View>
            <Text style={styles.label}>Business License Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="License Number"
              value={businessInfo.licenseNumber}
              onChangeText={text => handleInputChange('licenseNumber', text)}
            />
            <View>
              <Text>Business License Photo</Text>
              {licenseImage ? (
                <View>
                  <Image source={{uri: licenseImage}} style={styles.image} />
                  <TouchableOpacity
                    onPress={selectLicense}
                    style={styles.editButton}>
                    <Icon name={'pencil'} size={20} color={'#FFFF'} />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.Uploadbtn}
                  onPress={selectLicense}>
                  <Text>Upload Licence</Text>
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.label}>Addres</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Address"
              value={businessInfo.address}
              onChangeText={text => handleInputChange('address', text)}
            />

            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Bio"
              value={businessInfo.bio}
              onChangeText={text => handleInputChange('bio', text)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Order Type</Text>
            <View style={styles.radioButtonsContainer}>
              <RadioButton
                label="Delivery"
                isSelected={orderType === 'delivery'}
                onPress={() => handleOrderTypeChange('delivery')}
              />
              <RadioButton
                label="Pick Up"
                isSelected={orderType === 'pickup'}
                onPress={() => handleOrderTypeChange('pickup')}
              />
              <RadioButton
                label="Both"
                isSelected={orderType === 'both'}
                onPress={() => handleOrderTypeChange('both')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.text2}>
              Delivery Fee Walved - When Amount is Over
            </Text>
            <TextInput style={styles.input} placeholder="Add amount here..." />
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
            <Text style={styles.headerText}>Food Category</Text>
            <View style={[styles.textContainer]}>
              <Text style={{color: Color.blackColor, fontFamily: 'bold'}}>
                {selectedFoodCategories}
              </Text>
            </View>
            {foodCategories.map(category => (
              <View key={category} style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => handleFoodCategoryChange(category)}>
                  {selectedFoodCategories.includes(category) && (
                    <FontAwesome5
                      name="check"
                      size={18}
                      color={Color.primaryColor}
                    />
                  )}
                </TouchableOpacity>
                <Text>{category}</Text>
              </View>
            ))}
          </View>
          <View style={{marginBottom: 20}}>
            <View>
              <Text style={styles.headerText}>Driver Info</Text>
            </View>
            <Text>Driver Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="JOHN"
              value={driverInfo.driverName}
              onChangeText={text => handleDriverInputChange('driverName', text)}
            />
            <Text>Driver License Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="License Number"
              value={driverInfo.driverLicenseNum}
              onChangeText={text =>
                handleDriverInputChange('driverLicenseNum', text)
              }
            />
            {DrivelicenseImage ? (
              <View>
                <Image source={{uri: DrivelicenseImage}} style={styles.image} />
                <TouchableOpacity
                  onPress={selectDriveLicense}
                  style={styles.editButton}>
                  <Icon name={'pencil'} size={20} color={'#FFFF'} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.Uploadbtn}
                onPress={selectDriveLicense}>
                <Text>Upload Driver Licence</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSave();
          }}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    color: Color.blackColor,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    paddingVertical: 5,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 15,
  },
  textContainer: {
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginVertical: 10,
    gap: 50,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 5,
    color: Color.blackColor,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: Color.accentColor,
    // backgroundColor: 'white',
  },
  text2: {
    fontSize: 16,
    color: Color.blackColor,
  },
  button: {
    backgroundColor: Color.primaryColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    // elevation: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Uploadbtn: {
    backgroundColor: '#CCCC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  editButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 5,
  },
});
