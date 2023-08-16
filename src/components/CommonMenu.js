import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu_data from '../data/Menu_data';
import Color from '../constants/Color';

export default function CommonMenu({label, selectedMenu, onSelectMenu}) {
  console.log('labe>>>', label);
  return (
    <TouchableOpacity onPress={() => onSelectMenu(label)}>
      <Text
        style={[styles.label, selectedMenu === label && styles.selectedLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedLabel: {
    fontWeight: 'bold',
    color: Color.whiteColor,
    backgroundColor: Color.primaryColor,
  },
  label: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    color: Color.blackColor,
  },
});
