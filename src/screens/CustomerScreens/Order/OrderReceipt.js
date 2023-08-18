/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../components/customeButton';
import Color from '../../../constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import * as cartAction from '../../../store/action/action';
import Order from '../../CatererScreens/CatererOrders/Order';
import {Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../constants/Images';

export default function OrderReceipt({navigation, route}) {
  const dispatch = useDispatch();
  const Adress = useSelector(state => state.address.Adress);
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [couponPrice, setCouponPrice] = useState(0);
  const [orderSuccessModalVisible, setOrderSuccessModalVisible] =
    useState(false);

  const applyCoupon = () => {
    navigation.navigate('View Discount Codes');

    setAppliedCoupon(true);
    setCouponPrice(12);
  };

  // let selectedCard = false;

  const OrderData = useSelector(state => state.cart.cartItems);

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const couponCode = useSelector(state => state.cart.couponCode);
  const selectedCard = useSelector(state => state.cart.selectedcard);

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
                  color: Color.blackColor,
                }}>
                Address
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Saved Address');
                }}>
                <Text
                  style={{
                    color: Color.primaryColor,
                    paddingVertical: 5,
                    fontWeight: 'bold',
                  }}>
                  CHANGE
                </Text>
              </TouchableOpacity>
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
                <Text style={{fontSize: 16}}>{Adress}</Text>
              </View>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <Text
              style={{
                paddingVertical: 5,
                fontSize: 18,
                fontWeight: '500',
                color: Color.blackColor,
              }}>
              Bill Details
            </Text>

            <View>
              {OrderData &&
                OrderData.map((item, index) => (
                  <View style={styles.manage} key={index}>
                    <Text style={styles.itemText}>{item.type} Total</Text>
                    <View
                      style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(cartAction.removeFromCart(item.id))
                          }>
                          <Text style={[styles.quantityButton]}>
                            <Icon
                              name="minus"
                              size={20}
                              color={Color.redColor}
                            />
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <TouchableOpacity
                          onPress={() => dispatch(cartAction.addToCart(item))}>
                          <Text style={styles.quantityButton}>
                            <Icon name="plus" size={20} color={'green'} />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.itemText}>
                        ${item.price * item.quantity}
                      </Text>
                    </View>
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

            {couponCode != '' ? (
              <View style={{paddingVertical: 10}}>
                <View style={[styles.ItemContent]}>
                  <Text style={[styles.itemText, styles.color]}>
                    Code {couponCode} Applied
                  </Text>
                  <View>
                    <Text style={[styles.color, {marginLeft: 25}]}>- $12</Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(cartAction.storeCouponCode(''));
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
                  color: Color.blackColor,
                }}>
                Total
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Color.blackColor,
                }}>
                ${totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            {selectedCard != '' && (
              <View>
                <View style={styles.ItemContent}>
                  <Text style={{color: Color.blackColor, fontSize: 17}}>
                    Payment With
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Payment Method');
                    }}>
                    <Text
                      style={{color: Color.primaryColor, fontWeight: 'bold'}}>
                      CHANGE
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.card}>{selectedCard}</Text>
                </View>
              </View>
            )}
            <View>
              <View>
                <Text style={{color: '#000', fontSize: 17}}>Add Notes</Text>
                <TextInput
                  placeholder="Add text here..."
                  placeholderTextColor="#000"
                  multiline
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.container}>
        {selectedCard != '' ? (
          <CustomButton
            title={'Confirm Order'}
            onPress={() => setOrderSuccessModalVisible(true)}
          />
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
      <Modal
        visible={orderSuccessModalVisible}
        animationType="fade"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalImageContainer}>
              <Image
                source={Images.SUCESS}
                // resizeMode="cover"
                style={styles.modalImage}
              />
            </View>
            <Text style={styles.modalText}>
              Your order has been successfully placed!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate('Order');
              }}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    margin: 0,
    paddingBottom: 10,
  },
  AddressContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
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
    color: Color.blackColor,
    // textAlign: 'center',
  },
  itemContentWithBorder: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
    borderColor: '#c2c2c2',
  },
  checktext: {
    fontWeight: '800',
    color: Color.primaryColor,
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#ccc',
    height: 80,
  },
  quantityContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 2,
    borderColor: Color.offGrayColor,
    alignItems: 'center',
    borderRadius: 5,
    // marginHorizontal: 20,
  },
  AddPadding: {
    paddingBottom: 10,
    flexDirection: 'row',
  },
  quantityButton: {
    paddingHorizontal: 4,
    alignItems: 'center',
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
    backgroundColor: Color.whiteColor,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Color.whiteColor,
    padding: 20,
    borderRadius: 8,
    // marginHorizontal: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '500',

    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 15,
    borderTopColor: Color.accentColor,
  },
  modalButtonText: {
    color: Color.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  manage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
