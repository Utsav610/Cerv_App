import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../Constants/Color';
import {useDispatch} from 'react-redux';
import * as cartAction from '../store/action/action';

const DiscountCodes = ({navigation}) => {
  const dispatch = useDispatch();

  const handleCouponPress = code => {
    dispatch(cartAction.storeCouponCode(code));
    navigation.navigate('Order Receipt');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCouponPress('NEW40')}>
        <View style={styles.codeContainer}>
          <Text style={styles.discount}>40% off</Text>
          <Text style={styles.code}>NEW40</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCouponPress('GUJFREEDEL')}>
        <View style={styles.codeContainer}>
          <Text style={styles.discount}>Get 20% off</Text>
          <Text style={styles.code}>GUJFREEDEL</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
  },
  codeContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10, // Add margin-bottom to create space between the coupons
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
  },
  discount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
});

export default DiscountCodes;
