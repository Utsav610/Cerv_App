import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../constants/Color';
import {useDispatch} from 'react-redux';
import * as cartAction from '../store/action/action';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiscountCodes = ({navigation}) => {
  const dispatch = useDispatch();
  const coupons = useSelector(state => state.coupon);

  const handleCouponPress = code => {
    dispatch(cartAction.storeCouponCode(code));
    navigation.navigate('Order Receipt');
  };

  useEffect(() => {
    fetchCouponData();
  }, []);

  const fetchCouponData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(
        'http://43.204.219.99:8080/users/getCoupons/2',
        {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(token),
          },
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {coupons.map(coupon => (
        <TouchableOpacity
          style={styles.codeContainer}
          onPress={() => handleCouponPress(coupon.couponCode)}>
          <View key={coupon.id}>
            <Text style={styles.discount}>{coupon.title}</Text>
            <Text style={styles.code}>{coupon.couponCode}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  codeContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 20,
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.whiteColor,
    borderWidth: 1,
    padding: 10,
    borderColor: Color.whiteColor,
    textAlign: 'center',
  },
  discount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: Color.whiteColor,
  },
});

export default DiscountCodes;
