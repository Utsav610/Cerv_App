/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Color from '../../../Constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PastOrder({navigation}) {
  return (
    <View style={styles.caterOrder}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Past Order Details');
        }}>
        <View style={styles.header}>
          <Image
            source={require('../../../assest/catere.jpeg')}
            style={styles.image}
          />
          <View>
            <Text style={styles.caterTitle}>St John & St Thomas Catering</Text>
            <Text>Address</Text>
            <Text>22/11/2020</Text>
          </View>
        </View>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: Color.accentColor}}>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Item1</Text>
            <Text>$271.80</Text>
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Item1</Text>
            <Text>$271.80</Text>
          </View>
        </View>
        <View style={styles.ItemContent}>
          <View>
            <Text>Amount</Text>
            <Text style={{color: '#000'}}>$543</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'circle-medium'} size={20} color={'green'} />
          <Text style={{color: 'green'}}>
            Completed on 21/10/2020 at 01:20 PM
          </Text>
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
    marginBottom: 5,
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
});
