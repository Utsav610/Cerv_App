import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Color from '../../../Constants/Color';

export default function CurrentOrder({navigation}) {
  return (
    <View style={styles.caterOrder}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('catere Order Details');
        }}>
        <View style={styles.header}>
          <Image
            source={require('../../../assest/profile_Icon.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.caterTitle}>Yohana Yusuf</Text>
            <Text>3200 Williams Street,Nathan Road MA</Text>
            <Text>22/11/2020</Text>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>House Noodle</Text>
            <Text>$271.80</Text>
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Fried Rice</Text>
            <Text>$271.80</Text>
          </View>
        </View>
        <View style={styles.orderButtons}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Accept Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.rejectButton]}>
            <Text style={styles.buttonText}>Reject Order</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  caterOrder: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: Color.accentColor,
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
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
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
  ItemContainer: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: Color.accentColor,
  },
});
