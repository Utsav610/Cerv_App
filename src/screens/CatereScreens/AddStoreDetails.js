import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../componets/CustomeButton';
import Color from '../../Constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {storeCatereData} from '../../store/action/action';

export default function AddStoreDetails({navigation}) {
  const dispatch = useDispatch();
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
  const [selectedKm, setSelectedKm] = useState(5); // Default selected km
  const [selectedFoodCategories, setSelectedFoodCategories] = useState([
    'chinese',
  ]);
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
    // Update the businessInfo state with the new value
    setBusinessInfo(prevBusinessInfo => ({
      ...prevBusinessInfo,
      [field]: value,
    }));
  };

  const handleDriverInputChange = (field, value) => {
    // Update the DriverInfo state with the new value
    setDriverInfo(prevBusinessInfo => ({
      ...prevBusinessInfo,
      [field]: value,
    }));
  };

  const handleFoodCategoryChange = category => {
    const isSelected = selectedFoodCategories.includes(category);
    if (isSelected) {
      setSelectedFoodCategories(
        selectedFoodCategories.filter(item => item !== category),
      );
    } else {
      setSelectedFoodCategories([...selectedFoodCategories, category]);
    }
  };

  const handleSave = () => {
    const allData = {
      businessInfo,
      orderType,
      // deliveryFee,
      selectedKm,
      selectedFoodCategories,
      driverInfo,
      // Add other necessary data properties here for Driver Info
    };

    // Dispatch the action to store all data in the Redux store
    dispatch(storeCatereData(allData));
    // console.log(allData);
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
              <Image
                source={require('../../assest/license.jpeg')}
                style={styles.image}
              />
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
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'delivery' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('delivery')}>
                {orderType === 'delivery' ? (
                  <Icon
                    name="circle-slice-8"
                    size={20}
                    color={Color.primaryColor}
                  />
                ) : (
                  <FontAwesome5 name="circle" size={20} />
                )}
                <Text style={styles.radioButtonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'pickup' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('pickup')}>
                {orderType === 'pickup' ? (
                  <Icon
                    name="circle-slice-8"
                    size={20}
                    color={Color.primaryColor}
                  />
                ) : (
                  <FontAwesome5 name="circle" size={20} />
                )}
                <Text style={styles.radioButtonText}>Pick Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'both' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('both')}>
                {orderType === 'both' ? (
                  <Icon
                    name="circle-slice-8"
                    size={20}
                    color={Color.primaryColor}
                  />
                ) : (
                  <FontAwesome5 name="circle" size={20} />
                )}
                <Text style={styles.radioButtonText}>Both</Text>
              </TouchableOpacity>
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
              <Text style={{color: '#000', fontFamily: 'bold'}}>
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
            <Text>Driver License Photo</Text>
            <Image
              source={require('../../assest/Driver_license.jpeg')}
              style={styles.image}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSave(), navigation.navigate('Login');
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
    color: '#000',
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
    color: '#000',
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
    color: '#000',
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
});
