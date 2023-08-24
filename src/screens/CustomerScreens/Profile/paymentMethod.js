/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../../components/customeButton';
import Color from '../../../constants/Color';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import * as cartAction from '../../../store/action/action';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../../constants/Images';

export default function Payment_method({navigation}) {
  const dispatch = useDispatch();
  const [store, setStore] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleCardSelect = card => {
    setSelectedCard(card);
    dispatch(cartAction.setCard(card));
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);

  const fetchPaymentData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch('http://43.204.219.99:8080/getCards', {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setStore(data.message.data);
    } catch (error) {
      console.error('Error fetching Coupon data:', error);
    }
  };

  // console.log('>>>>StoreItem', store);
  return (
    <>
      <View style={styles.Container}>
        <View>
          <View style={styles.cardcontainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Saved Cards</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Add New Card');
                }}>
                <Text style={[styles.text, {color: Color.primaryColor}]}>
                  ADD CARD
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {store?.map((card, index) => (
                <View key={index}>
                  <TouchableOpacity
                    style={[
                      styles.card,
                      selectedCard === card.id && styles.selectedCard,
                    ]}
                    onPress={() => handleCardSelect(card.id)}>
                    <Image
                      source={Images.MASTERCARD}
                      style={{width: 50, height: 50, borderRadius: 20}}
                    />
                    <View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>**** **** **** {card.last4}</Text>
                        <Icon
                          name={'credit-card-edit-outline'}
                          size={17}
                          color={'#3CA6DD'}
                        />
                      </View>
                      <Text>
                        Expire: {card.exp_month}/{card.exp_year}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.cameraIconContainer}>
                      {selectedCard === card.id ? (
                        <Icon
                          name={'check-circle'}
                          size={25}
                          color={Color.greenColor}
                        />
                      ) : (
                        <Icon name={'check-circle'} size={25} color={'#ccc'} />
                      )}
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>

        <CustomButton
          title={'Make Payment'}
          onPress={() => {
            navigation.navigate(
              'Order Receipt',
              // {
              //    selectedCard: selectedCard || selectedPayment,
              // }
            );
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
    justifyContent: 'space-between',
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
    backgroundColor: Color.whiteColor,
    marginVertical: 10,
  },
  cardcontainer: {
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: Color.accentColor,
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
