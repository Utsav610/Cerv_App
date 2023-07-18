import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../Constants/Color';
import {useDispatch} from 'react-redux';
import * as cartAction from '../store/action/action';
import {useSelector} from 'react-redux';

const DiscountCodes = ({navigation}) => {
  const dispatch = useDispatch();
  const coupons = useSelector(state => state.coupon);

  const handleCouponPress = code => {
    dispatch(cartAction.storeCouponCode(code));
    navigation.navigate('Order Receipt');
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
    color: '#fff',
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    textAlign: 'center',
  },
  discount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
});

export default DiscountCodes;
