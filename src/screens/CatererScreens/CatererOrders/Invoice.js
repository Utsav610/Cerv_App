/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../constants/Color';
import CustomButton from '../../../components/customeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Invoice({navigation}) {
  useEffect(() => {
    fetchCouponData();
  }, []);

  const fetchCouponData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(
        'http://43.204.219.99:8080/caterer/get-invoice/1',
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
      console.error('Error fetching Coupon data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
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
        <View style={styles.itemContainer}>
          <Text style={styles.sectionTitle}>Bill Details</Text>

          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Noodels total (20 Dishes)</Text>
            <Text style={styles.itemText}>$271.80</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>Rice total (20 Dishes)</Text>
            <Text style={styles.itemText}>$271.80</Text>
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
      </View>
      <View style={styles.btn}>
        <CustomButton
          title={'Send Invoice'}
          onPress={() => {
            navigation.navigate('Order');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  homeicon: {
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: Color.accentColor,
    marginRight: 10,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
    color: Color.blackColor,
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
    color: Color.blackColor,
  },
});
