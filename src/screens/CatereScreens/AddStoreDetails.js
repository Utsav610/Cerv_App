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

export default function AddStoreDetails({navigation}) {
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

  const [orderType, setOrderType] = useState('delivery');
  const handleOrderTypeChange = type => {
    setOrderType(type);
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
            navigation.navigate('Login');
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
});
