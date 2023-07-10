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
import Color from '../../Constants/Color';

export default function EditCatereInfo({navigation}) {
  const [selectedKm, setSelectedKm] = useState(5);
  const [selectedFoodCategories, setSelectedFoodCategories] = useState([
    'chinese',
  ]);
  const foodCategories = ['chinese', 'indian Thali', 'Italian', 'Korean'];
  // Default selected km
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

  const [orderType, setOrderType] = useState('delivery');
  const handleOrderTypeChange = type => {
    setOrderType(type);
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
          <TextInput placeholder="john" style={styles.input1} />
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
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name={'phone'} size={20} color={Color.primaryColor} />
          <TextInput
            placeholder="123456789"
            secureTextEntry
            style={styles.input1}
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
                <FontAwesome5 name="check-circle" size={20} />
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
                <FontAwesome5 name="check-circle" size={20} />
              ) : (
                <FontAwesome5 name="circle" size={20} />
              )}
              <Text style={styles.radioButtonText}>Pick Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                orderType === 'pickup' && styles.radioButtonSelected,
              ]}
              onPress={() => handleOrderTypeChange('pickup')}>
              {orderType === 'pickup' ? (
                <FontAwesome5 name="check-circle" size={20} />
              ) : (
                <FontAwesome5 name="circle" size={20} />
              )}
              <Text style={styles.radioButtonText}>Both</Text>
            </TouchableOpacity>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Personal information');
        }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
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
