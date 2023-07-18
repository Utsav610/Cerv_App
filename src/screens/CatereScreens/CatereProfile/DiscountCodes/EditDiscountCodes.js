import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditDiscountCodes = ({route}) => {
  // console.log('params', route.params.index);
  const {coupon} = route.params;
  console.log('a', coupon);
  // const {index} = route.params;w
  const [title, setTitle] = useState(coupon.title);
  const [description, setDescription] = useState(coupon.description);
  const [expiryDate, setExpiryDate] = useState(coupon.expiryDate);
  const [active, setActive] = useState(coupon.active);
  const [couponCode, setCouponCode] = useState(coupon.couponCode);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.title}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.title}>Expiry Date:</Text>
        <TextInput
          style={styles.input}
          value={expiryDate}
          onChangeText={setExpiryDate}
        />

        <Text style={styles.title}>Active:</Text>
        <TextInput
          style={styles.input}
          value={active}
          onChangeText={setActive}
        />

        <Text style={styles.title}>Coupon Code:</Text>
        <TextInput
          style={styles.input}
          value={couponCode}
          onChangeText={setCouponCode}
        />

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
