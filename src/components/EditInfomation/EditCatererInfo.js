/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import Color from '../../constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {storeFormData, storeCatereData} from '../../store/action/action';
import Images from '../../constants/Images';
import RadioButton from '../radioButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditCatererInfo({navigation}) {
  const dispatch = useDispatch();
  const allData = useSelector(state => state.RegisterData);
  const [catererName, setCatererName] = useState(allData.catererName);
  const [email, setEmail] = useState(allData.email);
  const [phoneNumber, setPhoneNumber] = useState(allData.phoneNumber);
  const [selectedKm, setSelectedKm] = useState(5);
  const [selectedFoodCategories, setSelectedFoodCategories] =
    useState('chinese');

  const CatereData = useSelector(state => state.catereData);

  const [driverInfo, setDriverInfo] = useState({
    driverName: CatereData.driverInfo.driverName,
    driverLicenseNum: CatereData.driverInfo.driverLicenseNum,
  });

  const foodCategories = ['chinese', 'indian Thali', 'Italian', 'Korean'];

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

  const [orderType, setOrderType] = useState(CatereData.orderType);
  const handleOrderTypeChange = type => {
    setOrderType(type);
  };
  const handleFoodCategoryChange = category => {
    setSelectedFoodCategories(category);
  };

  const handleDriverInputChange = (field, value) => {
    // Update the DriverInfo state with the new value
    setDriverInfo(prevBusinessInfo => ({
      ...prevBusinessInfo,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const data = {
      catererName,
      email,
      phoneNumber,
    };

    const Catereditdata = {
      orderType,
      // deliveryFee,
      selectedKm,
      selectedFoodCategories,
      driverInfo,
    };
    dispatch(storeCatereData(Catereditdata));
    dispatch(storeFormData(data));
    navigation.navigate('Personal information');
  };

  // const handleSubmit = async () => {
  // const data = {
  //   name: catererName,
  //   email,
  //   orderType,
  //   category: selectedFoodCategories,
  // };

  //   try {
  //     const response = await fetch('http://43.204.219.99:8080/caterer/edit-profile', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //
  //       navigation.navigate('Personal information');
  //     } else {
  //
  //       console.error('Failed to update profile');
  //     }
  //   } catch (error) {
  //     console.error('Error while updating profile:', error);
  //   }
  // };

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
          <TextInput
            placeholder="john"
            style={styles.input1}
            value={catererName}
            onChangeText={text => {
              setCatererName(text);
            }}
          />
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
            style={styles.input1}
            value={email}
            keyboardType="email-address"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'phone'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456789"
            value={phoneNumber}
            style={styles.input1}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
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
            Delivery Fee Waived - When Amount is Over
          </Text>
          <TextInput style={styles.input} placeholder="Add amount here..." />
        </View>
        <View>
          <Text>Distance and Fee</Text>
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
        <View>
          <View>
            <Text style={styles.headerText}>Driver Info</Text>
          </View>
          <Text>Driver Name</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="JOHN"
            value={driverInfo.driverName}
            onChangeText={text => handleDriverInputChange('driverName', text)}
          />
          <Text>Driver License Number</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="License Number"
            value={driverInfo.driverLicenseNum}
            onChangeText={text =>
              handleDriverInputChange('driverLicenseNum', text)
            }
          />
          <Text>Driver License Photo</Text>
          <Image source={Images.DRIVER_LICENSE} style={styles.image} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
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
    // marginVertical: 10,
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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  image1: {
    width: 100,
    height: 100,
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
  input1: {
    flex: 1,
    marginLeft: 10,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 100,
    backgroundColor: Color.primaryColor,
    padding: 5,
    borderRadius: 15,
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
});
