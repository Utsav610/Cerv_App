import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditDiscountCodes = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Title:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Description:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Expiry Date:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Active:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Coupon Code:</Text>
        <TextInput style={styles.input} />

        <CustomButton title={'Save'} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
});

export default EditDiscountCodes;
