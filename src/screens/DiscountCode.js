import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../Constants/Color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DiscountCodes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        <Text style={styles.discount}>40% off</Text>
        <Text style={styles.code}>NEW40</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  codeContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dotsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 20,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#fff',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
  },
  discount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
});

export default DiscountCodes;
