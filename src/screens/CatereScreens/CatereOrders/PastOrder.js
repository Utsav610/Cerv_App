import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Color from '../../../Constants/Color';

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
        <View style={styles.ItemContent}>
          <Text style={styles.itemText}>Item1</Text>
          <Text>$271.80</Text>
        </View>
        <View style={styles.ItemContent}>
          <Text style={styles.itemText}>Item1</Text>
          <Text>$271.80</Text>
        </View>
        <View style={styles.ItemContent}>
          <View>
            <Text>Amount</Text>
            <Text>$543</Text>
          </View>
        </View>
        <View>
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
});
