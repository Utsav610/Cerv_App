import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../../componets/CustomeButton';
import Color from '../../../Constants/Color';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Payment_method({navigation}) {
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleCardSelect = card => {
    setSelectedCard(card);
    setSelectedPayment('');
  };

  const handlePaymentSelect = payment => {
    setSelectedPayment(payment);
    setSelectedCard('');
  };
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.cardcontainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Saved Cards</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Add New Card');
              }}>
              <Text style={[styles.text, {color: '#F5694E'}]}>ADD CARD</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.card,
                selectedCard === 'Card1' && styles.selectedCard,
              ]}
              onPress={() => handleCardSelect('Card1')}>
              <Text>Card1</Text>
              <TouchableOpacity style={styles.cameraIconContainer}>
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={selectedCard === 'Card1' ? 'green' : '#ccc'}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.card,
                selectedCard === 'Card2' && styles.selectedCard,
              ]}
              onPress={() => handleCardSelect('Card2')}>
              <Text>Card2</Text>
              <TouchableOpacity style={styles.cameraIconContainer}>
                <Icon
                  name={'check-circle'}
                  size={25}
                  color={selectedCard === 'Card2' ? 'green' : '#ccc'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.payContainer}>
          <Text>Other Payment Method</Text>

          <TouchableOpacity
            style={[
              styles.card,
              selectedPayment === 'Pay1' && styles.selectedCard,
            ]}
            onPress={() => handlePaymentSelect('Pay1')}>
            <Text>Pay1</Text>
            <TouchableOpacity style={styles.cameraIconContainer}>
              <Icon
                name={'check-circle'}
                size={25}
                color={selectedPayment === 'Pay1' ? 'green' : '#ccc'}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.card,
              selectedPayment === 'Pay2' && styles.selectedCard,
            ]}
            onPress={() => handlePaymentSelect('Pay2')}>
            <Text>Pay2</Text>
            <TouchableOpacity style={styles.cameraIconContainer}>
              <Icon
                name={'check-circle'}
                size={25}
                color={selectedPayment === 'Pay2' ? 'green' : '#ccc'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <CustomButton
          title={'Make Payment'}
          onPress={() => {
            navigation.navigate('Order Receipt');
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 25,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    padding: 10,
    backgroundColor: '#ffff',
    marginVertical: 10,
  },
  cardcontainer: {
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#cccc',
  },
  payContainer: {
    paddingVertical: 10,
  },
  cameraIconContainer: {
    // backgroundColor: '#8e8e8e',
    padding: 5,
    borderRadius: 15,
  },
  selectedCard: {
    borderColor: Color.primaryColor,
  },
});
