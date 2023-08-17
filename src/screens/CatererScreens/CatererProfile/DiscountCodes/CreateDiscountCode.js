import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import CustomButton from '../../../../components/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {storeCouponData} from '../../../../store/action/action';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../../constants/Color';

const CreateDiscountCode = ({navigation}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [active, setActive] = useState('');
  const [couponCode, setCouponCode] = useState('');

  // console.log(selectedDate);

  const handleGenerateCode = () => {
    const url = 'http://43.204.219.99:8080/caterer/addCoupon';

    const requestBody = {
      title: title,
      description: description,
      code: couponCode,
      is_percent: true,
      value: 40,
      expiry: selectedDate,
      is_active: active === 'Yes' ? true : false,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + JSON.parse(token),
      },
      body: JSON.stringify(requestBody),
    })
      .then(async res => {
        const response = await res.json();
        // console.log(response);
        if (response.status === 1) {
          navigation.navigate('Discount Codes');
        }
      })
      .catch(error => console.log(error));
  };

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
  };

  const showAndroidDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
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
          {/* <TextInput
          style={styles.input}
          placeholder="Enter expiry date"
          value={expiryDate}
          onChangeText={setExpiryDate}
        /> */}

          <TouchableOpacity onPress={showAndroidDatePicker}>
            <View style={styles.inputContainer}>
              <Text style={styles.androidDatePickerText}>
                {selectedDate.toLocaleDateString()}
              </Text>
              <FontAwesome5 name="calendar-alt" size={20} style={styles.icon} />
            </View>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

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
        </View>
        <CustomButton title={'Generate Code'} onPress={handleGenerateCode} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Color.accent2Color,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.accent2Color,
    paddingVertical: 8,
    marginBottom: 10,
  },
  androidDatePickerText: {
    fontSize: 16,
    color: Color.blackColor,
  },
});

export default CreateDiscountCode;
