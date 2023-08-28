import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import CustomButton from '../../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {storeCouponData} from '../../../../store/action/action';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValidationTextInput = ({
  label,
  value,
  onChangeText,
  error,
  onBlur,
  placeholder,
}) => (
  <View>
    <Text style={styles.title}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder}
    />
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const CreateDiscountCode = ({navigation, route}) => {
  // const isEditing = route.params.action == 'edit';
  // const initialTitle = isEditing ? route.params.title : '';
  // const initialDescription = isEditing ? route.params.description : '';
  // const initialcouponCode = isEditing ? route.params.couponCode : '';
  // const initialActive = isEditing ? route.params.Active : '';
  // const id = isEditing ? route.params.id : '';

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: isEditing ? 'Edit Discount Codes' : 'Create Discount Codes',
  //   });
  // }, [navigation, isEditing]);

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [active, setActive] = useState('');
  const [activeError, setActiveError] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponCodeError, setCouponCodeError] = useState('');
  const [dateError, setDateError] = useState('');

  const handleGenerateCode = async () => {
    const url = 'http://43.204.219.99:8080/caterer/addCoupon';
    const token = await AsyncStorage.getItem('token');

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
        Authorization: 'Bearer ' + JSON.parse(token),
      },
      body: JSON.stringify(requestBody),
    })
      .then(async res => {
        const response = await res.json();
        console.log(response);
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
    setDateError(validateDate(newDate) ? '' : 'Please select a future date');
  };

  const validateDate = selected => {
    const today = new Date();
    return selected >= today;
  };

  const showAndroidDatePicker = () => {
    setShowDatePicker(true);
  };

  const validateTitle = number => {
    return number.trim() !== '';
  };

  const validateDescription = number => {
    return number.trim() !== '';
  };

  const validateActive = number => {
    return number.trim() !== '';
  };

  const validateCoupon = number => {
    return number.trim() !== '';
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
          <ValidationTextInput
            label="Title:"
            value={title}
            placeholder={'Enter title'}
            onChangeText={text => {
              setTitle(text), setTitleError('');
            }}
            onBlur={() => {
              if (!validateTitle(title)) {
                setTitleError('Title requried');
              }
            }}
            error={titleError}
          />

          <ValidationTextInput
            label="Description:"
            value={description}
            placeholder={'Enter description'}
            onChangeText={text => {
              setDescription(text), setDescriptionError('');
            }}
            onBlur={() => {
              if (!validateDescription(title)) {
                setDescriptionError('Description Requried');
              }
            }}
            error={descriptionError}
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
          {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <ValidationTextInput
            label="Active:"
            value={active}
            placeholder={'Enter active status'}
            onChangeText={text => {
              setActive(text), setActiveError('');
            }}
            onBlur={() => {
              if (!validateActive(title)) {
                setActiveError('Active status Required');
              }
            }}
            error={activeError}
          />

          <ValidationTextInput
            label="Coupon Code:"
            value={couponCode}
            placeholder={'Enter coupon code'}
            onChangeText={text => {
              setCouponCode(text), setCouponCodeError('');
            }}
            onBlur={() => {
              if (!validateCoupon(title)) {
                setCouponCodeError('Coupon Code requried');
              }
            }}
            error={couponCodeError}
          />
        </View>
        <CustomButton
          // title={isEditing ? 'Update Code' : 'Generate Code'}
          title={'Generate Code'}
          onPress={handleGenerateCode}
        />
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
    marginBottom: 5,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default CreateDiscountCode;
