/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../componets/CustomeButton';
import Color from '../../../Constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import * as cartAction from '../../../store/action/action';
import Order from '../../CatereScreens/CatereOrders/Order';

export default function OrderReceipt({navigation, route}) {
  const couponCode = route?.params;
  // console.log(route);
  // console.log(route.params);
  const dispatch = useDispatch();
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [couponPrice, setCouponPrice] = useState(0);

  const applyCoupon = () => {
    navigation.navigate('View Discount Codes');
    // console.log('apply');
    setAppliedCoupon(true);
    setCouponPrice(12);
  };

  let selectedCard = false;

  const OrderData = useSelector(state => state.cart.cartItems);
  // console.log(OrderData);
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);

  const [subtotal, setSubtotal] = useState(0);
  const serviceCharges = 1.0;
  const deliveryFee = 2.5;
  const tax = 5.1;

  useEffect(() => {
    let total = 0;
    OrderData.forEach(item => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  }, [OrderData, appliedCoupon]);

  const totalAmount =
    subtotal + serviceCharges + deliveryFee + tax - couponPrice;
  // console.log(OrderData);

  return (
    <>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.AddressContainer}>
            <View style={styles.ItemContent}>
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#000',
                }}>
                Address
              </Text>
              <Text style={{color: Color.primaryColor, paddingVertical: 5}}>
                CHANGE
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.homeicon}>
                <FontAwesome5
                  name={'home'}
                  size={20}
                  color={Color.primaryColor}
                />
              </View>
              <View>
                <Text style={{fontSize: 16}}>
                  374 William S Canning Blvd , Fall
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <Text
              style={{
                paddingVertical: 5,
                fontSize: 18,
                fontWeight: '500',
                color: '#000',
              }}>
              Bill Details
            </Text>

            <View>
              {OrderData &&
                OrderData.map((item, index) => (
                  <View
                    style={[styles.ItemContent, styles.AddPadding]}
                    key={index}>
                    <Text style={styles.itemText}>{item.type} Total</Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(cartAction.removeFromCart(item.id))
                        }>
                        <Text style={[styles.quantityButton, {color: 'red'}]}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => dispatch(cartAction.addToCart(item))}>
                        <Text style={[styles.quantityButton, {color: 'green'}]}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.itemText}>
                      ${item.price * item.quantity}
                    </Text>
                  </View>
                ))}
            </View>

            <View style={[styles.ItemContent, styles.AddPadding]}>
              <Text style={styles.itemText}>Service Charges</Text>
              <Text style={styles.itemText}>$1.00</Text>
            </View>
            <View style={[styles.ItemContent, styles.AddPadding]}>
              <Text style={styles.itemText}>Delivery Fee</Text>
              <Text style={styles.itemText}>$2.50</Text>
            </View>

            {appliedCoupon ? (
              <View style={{paddingVertical: 10}}>
                <View style={[styles.ItemContent]}>
                  <Text style={[styles.itemText, styles.color]}>
                    Code {couponCode} Applied
                  </Text>
                  <View>
                    <Text style={[styles.color, {marginLeft: 25}]}>- $12</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setAppliedCoupon(false);
                        setCouponPrice(0);
                      }}>
                      <Text style={[styles.itemText, styles.checktext]}>
                        REMOVE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={applyCoupon}>
                  <View
                    style={[styles.ItemContent, styles.itemContentWithBorder]}>
                    <Text style={styles.itemText}>Apply Coupon Code</Text>
                    <Text style={[styles.itemText, styles.checktext]}>
                      CHECK
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Sub total</Text>
              <Text style={styles.itemText}>${subtotal.toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Tax</Text>
              <Text style={styles.itemText}>${tax.toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.ItemContent}>
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#000',
                }}>
                Total
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#000',
                }}>
                ${totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <View>
              <View style={styles.ItemContent}>
                <Text style={{color: '#000', fontSize: 17}}>Payment With</Text>
                <Text style={{color: Color.primaryColor}}>CHANGE</Text>
              </View>
              <View>
                <Text style={styles.card}>card1</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{color: '#000', fontSize: 17}}>Add Notes</Text>
                <TextInput
                  placeholder="Add text here..."
                  multiline
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.container}>
        {selectedCard ? (
          <View style={styles.container}>
            <CustomButton title={'Confirm Order'} />
          </View>
        ) : (
          <View style={styles.container}>
            <CustomButton
              title={'Make Payment'}
              onPress={() => {
                navigation.navigate('Payment Method');
              }}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  AddressContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeicon: {
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: Color.accentColor,
    marginRight: 10,
  },
  ItemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#000',
    // textAlign: 'center',
  },
  itemContentWithBorder: {
    borderWidth: 1,
    padding: 7,
  },
  checktext: {
    fontWeight: '800',
    color: Color.primaryColor,
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#ffff',
  },
  quantityContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 2,
    borderColor: '#8e8e8e',
    // marginHorizontal: 20,
  },
  AddPadding: {
    paddingBottom: 10,
  },
  quantityButton: {
    paddingHorizontal: 8,
  },
  color: {
    color: '#5663FF',
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
});
