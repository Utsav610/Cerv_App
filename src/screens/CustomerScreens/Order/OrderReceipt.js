/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../componets/CustomeButton';
import Color from '../../../Constants/Color';
export default function OrderReceipt({navigation}) {
  return (
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
            <FontAwesome5 name={'home'} size={20} color={'#931314'} />
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

        <View style={styles.ItemContent}>
          <Text style={styles.itemText}>Noodels total</Text>
          <Text style={styles.itemText}>$271.80</Text>
        </View>
        <View style={styles.ItemContent}>
          <Text style={styles.itemText}>Rice total</Text>
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
        <View style={[styles.ItemContent, styles.itemContentWithBorder]}>
          <Text style={styles.itemText}>Apply Coupon Code</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('View Discount Codes');
            }}>
            <Text style={[styles.itemText, styles.checktext]}>CHECK</Text>
          </TouchableOpacity>
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
      <View>
        <View>
          <Text>Add Notes</Text>
          <TextInput
            placeholder="Add text here..."
            multiline
            style={styles.textInput}
          />
          <CustomButton
            title={'Make Payment'}
            onPress={() => {
              navigation.navigate('Payment Method');
            }}
          />
        </View>
      </View>
    </View>
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
});
