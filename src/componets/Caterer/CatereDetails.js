import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';

const CatereDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [orderType, setOrderType] = useState('delivery');

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
  };

  const handleTimeChange = (event, newTime) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
    }
    if (newTime !== undefined) {
      setSelectedTime(newTime);
    }
  };

  const handleOrderTypeChange = type => {
    setOrderType(type);
  };

  const showAndroidDatePicker = () => {
    setShowDatePicker(true);
  };

  const showAndroidTimePicker = () => {
    setShowTimePicker(true);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assest/catere.jpeg')}
                style={styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.text}>St John & Thomans Catering</Text>
              </View>
              <View>
                <Text style={styles.textaddress}>
                  3200 Williams treet , Nathan Road , MA
                </Text>
              </View>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map(index => (
                  <FontAwesome5 key={index} name="star" size={16} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.text}>Date and Time</Text>
            <View style={styles.dtContainer}>
              {Platform.OS === 'ios' && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  onChange={handleDateChange}
                />
              )}
              {Platform.OS === 'android' && (
                <TouchableOpacity onPress={showAndroidDatePicker}>
                  <View style={styles.inputContainer}>
                    <FontAwesome5
                      name="calendar-alt"
                      size={20}
                      style={styles.icon}
                    />
                    <Text style={styles.androidDatePickerText}>
                      {selectedDate.toLocaleDateString()}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {showDatePicker && Platform.OS === 'android' && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}

              <View>
                {Platform.OS === 'ios' && (
                  <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    onChange={handleTimeChange}
                  />
                )}
                {Platform.OS === 'android' && (
                  <TouchableOpacity onPress={showAndroidTimePicker}>
                    <View style={styles.inputContainer}>
                      <FontAwesome5
                        name="clock"
                        size={20}
                        style={styles.icon}
                      />
                      <Text style={styles.androidDatePickerText}>
                        {selectedTime.toLocaleTimeString()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                {showTimePicker && Platform.OS === 'android' && (
                  <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Food Category</Text>
            <View>
              <Text style={styles.food_type_text}>Chinese FOOD</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Bio</Text>
            <View>
              <Text style={styles.food_type_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Order Type</Text>
            <View style={styles.radioButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'delivery' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('delivery')}>
                <Text style={styles.radioButtonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'pickup' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('pickup')}>
                <Text style={styles.radioButtonText}>Pick Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Item Total </Text>
        </View>
        <View>
          <Text style={styles.footerText}>|</Text>
        </View>
        <View>
          <Text style={styles.footerText}>MAKE PAYMENT</Text>
        </View>
      </View>
    </>
  );
};

export default CatereDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  text: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  androidDatePickerText: {
    fontSize: 16,
    color: '#000',
  },
  radioContainer: {
    marginBottom: 10,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#ccc',
  },
  dtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: '#ccc',
  },
  food_type_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textaddress: {
    marginVertical: 5,
  },
  footer: {
    height: 50,
    backgroundColor: '#F5694E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
