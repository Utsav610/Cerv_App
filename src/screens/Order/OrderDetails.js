/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../Constants/Color';

export default function OrderDetails({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>Details</Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assest/catere.jpeg')}
            style={styles.image}
          />
          <View>
            <Text style={styles.caterTitle}>St John & St Thomas Catering</Text>
            <Text>Address</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <View>
              <Text style={styles.itemText}>Item1</Text>
              <Text>20 Dishes</Text>
            </View>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
          <View style={styles.ItemContent}>
            <View>
              <Text style={styles.itemText}>Item1</Text>
              <Text>20 Dishes</Text>
            </View>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.orderTypeDetails}>
            <Text style={styles.mtext}>Order type</Text>
            <Text style={styles.itemText}>Delivery</Text>
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
              color: '#000',
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
                  color: '#000',
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
                <Text style={{color: '#FFFF'}}>Chat</Text>
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
              color: '#000',
            }}>
            Bill Details
          </Text>

          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Noodels total(20 Dieshes)</Text>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Rice total(20 Dieshes)</Text>
            <Text style={styles.itemText}>$271.80</Text>
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
            <Text style={styles.itemText}>-$5.10</Text>
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
              $542.00
            </Text>
          </View>
        </View>
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
              <FontAwesome5 name={'home'} size={20} color={'#931314'} />
            </View>
            <View>
              <Text style={{fontSize: 16}}>
                374 William S Canning Blvd , Fall
              </Text>
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
  ItemContent: {
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
});
