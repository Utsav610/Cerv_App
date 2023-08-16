import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../constants/Color';

const RadioButton = ({label, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
      onPress={onPress}>
      {isSelected ? (
        <Icon name="circle-slice-8" size={20} color={Color.primaryColor} />
      ) : (
        <FontAwesome5 name="circle" size={20} />
      )}
      <Text style={styles.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 5,
    color: Color.blackColor,
    fontWeight: '500',
  },
  radioButtonSelected: {
    marginVertical: 10,
  },
});

export default RadioButton;
