import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Color from '../../../Constants/Color';
import {useDispatch, useSelector} from 'react-redux';

export default function OrderDetails({navigation}) {
  const OrderData = useSelector(state => state.cart.cartItems);
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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

        <View style={styles.itemContainer}>
          <View style={styles.orderTypeDetails}>
            <Text style={styles.text}>Order type</Text>
            <Text style={styles.itemText}>Delivery</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Order Items Details</Text>
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemText}>Item1</Text>
              <Text>20 Dishes</Text>
            </View>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemText}>Item1</Text>
              <Text>20 Dishes</Text>
            </View>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.sectionTitle}>Bill Details</Text>
          <View style={styles.itemContainer}>
            {OrderData &&
              OrderData.map((item, index) => (
                <View key={index}>
                  <View style={styles.itemContent}>
                    <View>
                      <Text style={styles.itemText}>{item.type}</Text>
                      <Text>{item.quantity} Dishes</Text>
                    </View>
                    <Text style={styles.itemText}>
                      ${item.quantity * item.price}
                    </Text>
                  </View>
                </View>
              ))}
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Service Charges</Text>
            <Text style={styles.itemText}>$1.00</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Delivery Fee</Text>
            <Text style={styles.itemText}>$2.50</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Promo Discount</Text>
            <Text style={styles.itemText}>-$2.50</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Sub total</Text>
            <Text style={styles.itemText}>$547.10</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Tax</Text>
            <Text style={styles.itemText}>$5.10</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.sectionTitle}>Total</Text>
            <Text style={styles.sectionTitle}>$542.00</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.orderButtons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('CatereLogin');
          }}>
          <Text style={styles.buttonText}>Accept Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.rejectButton]}>
          <Text style={styles.buttonText}>Reject Order</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderBottomColor: '#cccc',
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
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#000',
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  sectionTitle: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  orderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonContainer: {
    width: '48%',
    padding: 10,
    backgroundColor: '#4CD964',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  rejectButton: {
    backgroundColor: '#FF0000',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10, // Adjust the value based on your button height
  },
});
