import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Categories from '../componets/Categories/Categories';
export default function Search() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="search" size={20} color="#000" />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <Categories />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    fontSize: 20,
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
