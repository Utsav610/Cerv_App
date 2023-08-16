import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../constants/Color';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default CustomButton;
