import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../../constants/Color';

const EditDiscountCodes = ({route}) => {
  const {coupon} = route.params;

  const [title, setTitle] = useState(coupon.title);
  const [description, setDescription] = useState(coupon.description);
  // const [expiryDate, setExpiryDate] = useState(coupon.expiryDate);
  const [active, setActive] = useState(coupon.active);
  const [couponCode, setCouponCode] = useState(coupon.couponCode);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, newDate) => {
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
        <Text style={styles.title}>Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.title}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.title}>Expiry Date:</Text>

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

export default EditDiscountCodes;
