/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../constants/Color';
import StepIndicator from 'react-native-step-indicator';
import {useDispatch, useSelector} from 'react-redux';
import {BackHandler} from 'react-native';
import Images from '../../../constants/Images';

const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 20,
  // separatorStrokeWidth: 2,
  // currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: Color.primaryColor,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: Color.primaryColor,
  stepStrokeUnFinishedColor: Color.primaryColor,
  separatorFinishedColor: Color.primaryColor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: Color.primaryColor,
  stepIndicatorUnFinishedColor: Color.primaryColor,
  stepIndicatorCurrentColor: Color.primaryColor,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 5,
  stepIndicatorLabelCurrentColor: Color.primaryColor,
  stepIndicatorLabelFinishedColor: Color.primaryColor,
  stepIndicatorLabelUnFinishedColor: Color.primaryColor,
  labelColor: Color.primaryColor,
  labelSize: 12,
  currentStepLabelColor: Color.primaryColor,
};

export default function OrderDetails({navigation}) {
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const [currentStep, setCurrentStep] = useState(1);

  const OrderData = useSelector(state => state.cart.cartItems);
  const OrderType = useSelector(state => state.cart.orderType);
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const Adress = useSelector(state => state.address.Adress);

  const stepLabels = [
    'Order Accepted',
    'Preparing Order',
    'Dispatch for Delivery',
    'Order Delivered',
  ];

  const handleStepChange = step => {
    setCurrentStep(step);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            currentPosition={currentStep}
            labels={stepLabels}
            stepCount={4}
          />
        </View>
        <View style={styles.header}>
          <Image source={Images.CATERER} style={styles.image} />
          <View>
            <Text style={styles.caterTitle}>St John & St Thomas Catering</Text>
            <Text>Address</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          {OrderData &&
            OrderData.map((item, index) => (
              <View key={index}>
                <View style={styles.ItemContent}>
                  <View>
                    <Text style={styles.itemText}>{item.type}</Text>
                    <Text>{item.quantity} Dishes</Text>
                  </View>
                  <Text style={styles.itemText}>
                    {item.quantity * item.price}
                  </Text>
                </View>
              </View>
            ))}
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.orderTypeDetails}>
            <Text style={styles.mtext}>Order type</Text>
            <Text style={styles.itemText}>{OrderType}</Text>
          </View>
          <View>
            <Text style={styles.mtext}>
              Delivery based on how far the customer Loaction
            </Text>
            <Text style={styles.itemText}>* 5km Distance charge $2.50</Text>
            <Text style={styles.itemText}>* 10km Distance charge $5</Text>
          </View>
          <View style={styles.orderTypeDetails}>
            <Text style={styles.mtext}>Order On</Text>
            <Text style={styles.itemText}>date and time</Text>
          </View>
          <View>
            <Text style={styles.mtext}>Amount</Text>
            <Text style={styles.itemText}>$543</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              Delivery date and Time
            </Text>
          </View>
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 16,
              fontWeight: '400',
              color: Color.blackColor,
            }}>
            20 November 2020 at 06:58 AM
          </Text>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <View>
              <Text>Delivery Person</Text>
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  fontWeight: '700',
                  color: Color.blackColor,
                }}>
                John Martyn
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('Chat');
                }}>
                <Text style={{color: Color.whiteColor}}>Chat</Text>
              </TouchableOpacity>
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
                <View
                  style={[styles.ItemContent, styles.AddPadding]}
                  key={index}>
                  <Text style={styles.itemText}>
                    {item.type} Total ({item.quantity} Dishes)
                  </Text>
                  <Text style={styles.itemText}>
                    ${item.price * item.quantity}
                  </Text>
                </View>
              ))}
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Service Charges</Text>
            <Text style={styles.itemText}>$1.00</Text>
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Delivery Fee</Text>
            <Text style={styles.itemText}>$2.50</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Promo Discount</Text>
            <Text style={styles.itemText}>-$2.50</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Sub total</Text>
            <Text style={styles.itemText}>$547.10</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Tax</Text>
            <Text style={styles.itemText}>$5.10</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.textInfo}>Total</Text>
            <Text style={styles.textInfo}>$542.00</Text>
          </View>
        </View>
        <View style={styles.AddressContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.textInfo}>Address</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Saved Address');
              }}>
              <Text style={{color: Color.primaryColor, paddingVertical: 5}}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  caterTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Color.blackColor,
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
    color: Color.blackColor,
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  ItemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  mtext: {
    paddingVertical: 3,
  },
  btn: {
    alignItems: 'center',
    width: 70,
    padding: 6,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
  },
  homeicon: {
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: Color.accentColor,
    marginRight: 10,
  },
  AddressContainer: {
    marginTop: '10%',
  },
  textInfo: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: '500',
    color: Color.blackColor,
  },
});
