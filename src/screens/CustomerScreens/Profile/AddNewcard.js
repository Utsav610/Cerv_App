import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../../componets/CustomeButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function AddNewcard({navigation}) {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentSelect = payment => {
    setSelectedPayment(payment);
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
              <Image
                source={require('../../../assest/masterCard.png')}
                style={styles.cardImage}
              />
              {selectedPayment === 'masterCard' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={'green'}
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
              <Image
                source={require('../../../assest/visa.png')}
                style={styles.cardImage}
              />
              {selectedPayment === 'visa' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={'green'}
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
              <Image
                source={require('../../../assest/Rupay.png')}
                style={styles.cardImage}
              />
              {selectedPayment === 'rupay' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={'green'}
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
              <Image
                source={require('../../../assest/masterCard.png')}
                style={styles.cardImage}
              />
              {selectedPayment === 'masterCard2' && (
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={'green'}
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>CARD NUMBER</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.direction}>
            <View>
              <Text style={styles.label}>EXPIRATION DATE</Text>
              <TextInput style={[styles.input, {width: 190}]} />
            </View>
            <View>
              <Text style={styles.label}>CVV</Text>
              <TextInput secureTextEntry style={[styles.input, {width: 85}]} />
            </View>
          </View>
          <View>
            <Text style={styles.label}>CARD HOLDER'S</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View>
          <CustomButton
            title={'Confirm'}
            onPress={() => {
              navigation.goBack();
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
});
