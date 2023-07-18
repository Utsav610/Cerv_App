import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {storeCouponData} from '../../../../store/action/action';

const CreateDiscountCode = ({navigation}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [active, setActive] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const handleGenerateCode = () => {
    // Do something with the stored values (e.g., send them to an API)
    const data = {
      title: title,
      description: description,
      expiryDate: expiryDate,
      active: active,
      couponCode: couponCode,
    };
    console.log(data);
    dispatch(storeCouponData(data));
    navigation.navigate('Discount Codes');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.title}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.title}>Expiry Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter expiry date"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />

        <Text style={styles.title}>Active:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter active status"
          value={active}
          onChangeText={setActive}
        />

        <Text style={styles.title}>Coupon Code:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter coupon code"
          value={couponCode}
          onChangeText={setCouponCode}
        />
        <CustomButton title={'Generate Code'} onPress={handleGenerateCode} />
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

export default CreateDiscountCode;
