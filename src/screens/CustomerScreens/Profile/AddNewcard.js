/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../../components/customeButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../../constants/Color';
import Images from '../../../constants/Images';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddNewcard({navigation}) {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const DEFAULT_OUTPUT_FORMAT = 'MM/YYYY';

  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const [cardNumberError, setCardNumberError] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  const handlePaymentSelect = payment => {
    setSelectedPayment(payment);
  };

  const validateFields = () => {
    let isValid = true;

    if (cardNumber.length !== 16) {
      isValid = false;
    }

    if (cvv.length !== 3) {
      isValid = false;
    }
    if (name.trim() === '') {
      isValid = false;
    }

    return isValid;
  };

  const validateNumber = number => {
    console.log(/^\d{16}$/.test(number));
    return /^\d{16}$/.test(number);
  };

  const validateCvv = number => {
    return /^\d{3}$/.test(number);
  };

  const validateName = name => {
    return name.trim() !== '';
  };

  const HandleConfirm = async () => {
    if (validateFields()) {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      const url = 'http://43.204.219.99:8080/addCard';
      const requestBody = {
        number: cardNumber,
        expire: moment(date).format(DEFAULT_OUTPUT_FORMAT),
        cvc: cvv,
        name: name,
      };

      // console.log(requestBody);

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
        body: JSON.stringify(requestBody),
      })
        .then(async res => {
          const response = await res.json();
          console.log('response', response);
          if (response.status === 1) {
            navigation.goBack();
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={[
                styles.cardImageContainer,
                selectedPayment === 'masterCard' &&
                  styles.selectedCardImageContainer,
              ]}
              onPress={() => handlePaymentSelect('masterCard')}>
              <Image source={Images.MASTERCARD} style={styles.cardImage} />
              {selectedPayment === 'masterCard' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={Color.greenColor}
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.cardImageContainer,
                selectedPayment === 'visa' && styles.selectedCardImageContainer,
              ]}
              onPress={() => handlePaymentSelect('visa')}>
              <Image source={Images.VISA} style={styles.cardImage} />
              {selectedPayment === 'visa' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={Color.greenColor}
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.cardImageContainer,
                selectedPayment === 'rupay' &&
                  styles.selectedCardImageContainer,
              ]}
              onPress={() => handlePaymentSelect('rupay')}>
              <Image source={Images.RUPAY} style={styles.cardImage} />
              {selectedPayment === 'rupay' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={Color.greenColor}
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.cardImageContainer,
                selectedPayment === 'masterCard2' &&
                  styles.selectedCardImageContainer,
              ]}
              onPress={() => handlePaymentSelect('masterCard2')}>
              <Image source={Images.MASTERCARD} style={styles.cardImage} />
              {selectedPayment === 'masterCard2' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={Color.greenColor}
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>CARD NUMBER</Text>
            <TextInput
              style={styles.input}
              value={cardNumber}
              onChangeText={text => {
                setCardNumber(text);
                setCardNumberError('');
              }}
              onBlur={() => {
                if (!validateNumber(cardNumber)) {
                  setCardNumberError('Card number must be 16 digits');
                }
              }}
            />
          </View>
          {cardNumberError ? (
            <Text style={styles.errorText}>{cardNumberError}</Text>
          ) : null}
          <View style={styles.direction}>
            <View>
              <Text style={styles.label}>EXPIRATION DATE</Text>
              <TouchableOpacity
                onPress={() => showPicker(true)}
                style={styles.expiration}>
                <Text>{moment(date).format(DEFAULT_OUTPUT_FORMAT)}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  secureTextEntry
                  style={[styles.input, {width: 85}]}
                  value={cvv}
                  onChangeText={text => {
                    setCvv(text);
                    setCvvError('');
                  }}
                  onBlur={() => {
                    if (!validateCvv(cvv)) {
                      setCvvError('CVV must be 3 digits');
                    }
                  }}
                />
              </View>
              {cvvError ? (
                <Text style={styles.errorText}>{cvvError}</Text>
              ) : null}
            </View>
          </View>
          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={date}
              minimumDate={new Date()}
              maximumDate={new Date(2025, 5)}
              // locale="ko"
            />
          )}
          <View>
            <Text style={styles.label}>CARD HOLDER'S</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => {
                setName(text);
                setCardNameError('');
              }}
              onBlur={() => {
                if (!validateName(name)) {
                  setCardNameError("Cardholder's name cannot be empty");
                }
              }}
            />
            {cardNameError ? (
              <Text style={styles.errorText}>{cardNameError}</Text>
            ) : null}
          </View>
        </View>
        <View>
          <CustomButton
            title={'Confirm'}
            onPress={() => {
              HandleConfirm();
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 45,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    borderColor: '#8888',
    // backgroundColor: 'white',
  },
  direction: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'flex-start',
    gap: 50,
  },
  checkIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
  cardImageContainer: {
    alignItems: 'center',
    margin: 10,
    position: 'relative',
  },
  expiration: {
    borderWidth: 0.5,
    borderColor: Color.offGrayColor,
    padding: 13,
    alignItems: 'center',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
