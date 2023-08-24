/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import CustomButton from '../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValidationTextInput = ({label, value, onChangeText, error, onBlur}) => (
  <View>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
    <Text>{label}</Text>
  </View>
);

const AddAddress = () => {
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const [numberError, setNumberError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [landmarkError, setLandmarkError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [stateError, setStateError] = useState('');
  const validatenumber = number => {
    return number.trim() !== '';
  };

  const validateStreet = street => {
    return street.trim() !== '';
  };

  const validateLandmark = landmark => {
    return landmark.trim() !== '';
  };

  const validateCity = city => {
    return city.trim() !== '';
  };

  const validateState = state => {
    return state.trim() !== '';
  };

  const validateCountry = country => {
    return country.trim() !== '';
  };

  const handleGenerateCode = () => {
    // if (validateFields()) {
    // }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ValidationTextInput
          label="Flat no / House no "
          value={number}
          onChangeText={text => {
            setNumber(text), setNumberError('');
          }}
          onBlur={() => {
            if (!validatenumber(number)) {
              setNumberError('Flat no  is required');
            }
          }}
          error={numberError}
        />
        <ValidationTextInput
          label="Street"
          value={street}
          onChangeText={text => {
            setStreet(text), setStreetError('');
          }}
          onBlur={() => {
            if (!validateStreet(street)) {
              setStreetError('Street is required');
            }
          }}
          error={streetError}
        />
        <ValidationTextInput
          label="Landmark"
          value={landmark}
          onChangeText={text => {
            setLandmark(text), setLandmarkError('');
          }}
          onBlur={() => {
            if (!validateLandmark(street)) {
              setLandmarkError('Landmark is required');
            }
          }}
          error={landmarkError}
        />
        <ValidationTextInput
          label="City"
          value={city}
          onChangeText={text => {
            setCity(text), setCityError('');
          }}
          onBlur={() => {
            if (!validateCity(street)) {
              setCityError('City is required');
            }
          }}
          error={cityError}
        />
        <ValidationTextInput
          label="State"
          value={state}
          onChangeText={text => {
            setState(text), setStateError('');
          }}
          onBlur={() => {
            if (!validateState(street)) {
              setStateError('State is required');
            }
          }}
          error={stateError}
        />
        <ValidationTextInput
          label="Country"
          value={country}
          onChangeText={text => {
            setCountry(text), setCountryError('');
          }}
          onBlur={() => {
            if (!validateCountry(street)) {
              setCountryError('Country is required');
            }
          }}
          error={countryError}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            alignSelf: 'center',
            bottom: 0,
          }}>
          <CustomButton title="Add Address" onPress={handleGenerateCode} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Color.accent2Color,
    marginBottom: 5,
    padding: 5,
  },
  errorText: {
    color: 'red',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
};

export default AddAddress;
