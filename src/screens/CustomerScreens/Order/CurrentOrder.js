import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../../../Constants/Color';
import {useDispatch, useSelector} from 'react-redux';

export default function CurrentOrder({navigation}) {
  const OrderData = useSelector(state => state.cart.cartItems);
  const Address = useSelector(state => console.log(state.address.Address));
  const OrderType = useSelector(state => state.cart.orderType);
  return (
    <View style={styles.caterOrder}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Order Detials');
        }}>
        <View style={styles.header}>
          <Image
            source={require('../../../assest/catere.jpeg')}
            style={styles.image}
          />
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
                  </View>
                  <Text style={styles.itemText}>
                    ${item.quantity * item.price}
                  </Text>
                </View>
              </View>
            ))}
        </View>
        <View style={styles.ItemContent}>
          <View style={styles.orderTypeDetails}>
            <Text>Order type</Text>
            <Text style={{color: '#000'}}>{OrderType}</Text>
          </View>
        </View>
        <View style={styles.orderTypeDetails}>
          <Text>Order On</Text>
          <Text style={{color: '#000'}}>20 Nov 2020 at 06:58 AM</Text>
        </View>
        <View style={styles.ItemContent}>
          <View>
            <Text>Amount</Text>
            <Text style={{color: '#000'}}>$543</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: '#FFFF'}}>Cancel Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerOrder: {
    borderBottomWidth: 2,
    borderBottomColor: Color.accentColor,
  },
  orderContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    marginBottom: 10,
  },
  tabButton: {
    padding: 10,
  },
  currentOrder: {
    backgroundColor: Color.primaryColor,
  },
  pastOrder: {
    backgroundColor: Color.primaryColor,
  },
  tabButtonText: {
    color: '#000',
    fontSize: 16,
  },
  selectedTabButtonText: {
    color: '#FFF',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  caterTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  caterOrder: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: Color.accentColor,
  },
  itemText: {
    fontWeight: 500,
    fontSize: 15,
    color: '#000',
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ItemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  btn: {
    alignItems: 'center',
    width: '100%',
    padding: 6,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
  },
});
