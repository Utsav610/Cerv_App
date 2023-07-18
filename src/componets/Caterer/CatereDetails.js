/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import Categories_data from '../../data/Categories_data';
import Color from '../../Constants/Color';
import Menu_data from '../../data/Menu_data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating-widget';
import {useDispatch, useSelector} from 'react-redux';
import * as cartAction from '../../store/action/action';

const CatereDetails = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [orderType, setOrderType] = useState('delivery');
  const [selectedMenu, setSelectedMenu] = useState('Noodles');

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const qty = useSelector(state => state.cart.cartItems);

  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredCategories = Menu_data.filter(
      item => item.type === selectedMenu,
    );
    setFilteredData(filteredCategories);
  }, [selectedMenu]);

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
    dispatch(cartAction.setOrderType(type));
  };

  const showAndroidDatePicker = () => {
    setShowDatePicker(true);
  };

  const showAndroidTimePicker = () => {
    setShowTimePicker(true);
  };
  // const [qty, setqty] = useState(0);

  const renderItem = ({item}) => {
    // const existingItem = qty.find(q => q.id === item.id);
    // console.log(item);

    const existingItem = qty ? qty.find(q => q.id === item.id) : undefined;
    const quantity = existingItem ? existingItem.quantity : 0;
    return (
      <>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image source={item.img} style={styles.itemImage} />
          </View>
          <View style={styles.itemDetailsContainer}>
            <Text style={styles.itemName}>{item.type}</Text>
            <Text style={styles.itemDescription}>
              Delicious fried rice with chicken, vegetables, and special spices.
            </Text>
            <View style={styles.Direction}>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <View style={styles.addToCartButton}>
                {quantity > 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 5,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(cartAction.removeFromCart(item.id))
                      }>
                      <Text style={[styles.quantityButton, {marginRight: 4}]}>
                        <Icon name="minus" size={20} color={'red'} />
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(cartAction.addToCart(item))}>
                      <Text style={styles.quantityButton}>
                        <Icon name="plus" size={20} color={'green'} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 5,
                    }}
                    onPress={() => dispatch(cartAction.addToCart(item))}>
                    <Icon
                      name={'cart-outline'}
                      size={15}
                      color={Color.primaryColor}
                      style={{marginRight: 5}}
                    />
                    <Text style={styles.addToCartButtonText}>Add</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </>
    );
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
                <Text style={styles.name}>St John & Thomans Catering</Text>
              </View>
              <View>
                <Text style={styles.textaddress}>
                  3200 Williams treet , Nathan Road , MA
                </Text>
              </View>
              <StarRating
                rating={4}
                totalStars={5}
                starColor="#FACC02"
                emptyStarColor="transparent"
                starSize={20}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
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
                    <Text style={styles.androidDatePickerText}>
                      {selectedDate.toLocaleDateString()}
                    </Text>
                    <FontAwesome5
                      name="calendar-alt"
                      size={20}
                      style={styles.icon}
                    />
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
                      <Text style={styles.androidDatePickerText}>
                        {selectedTime.toLocaleTimeString()}
                      </Text>
                      <FontAwesome5
                        name="clock"
                        size={20}
                        style={styles.icon}
                      />
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
                {orderType === 'delivery' ? (
                  <Icon
                    name="circle-slice-8"
                    size={20}
                    color={Color.primaryColor}
                  />
                ) : (
                  <FontAwesome5 name="circle" size={20} />
                )}
                <Text style={styles.radioButtonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  orderType === 'pickup' && styles.radioButtonSelected,
                ]}
                onPress={() => handleOrderTypeChange('pickup')}>
                {orderType === 'pickup' ? (
                  <Icon
                    name="circle-slice-8"
                    size={20}
                    color={Color.primaryColor}
                  />
                ) : (
                  <FontAwesome5 name="circle" size={20} />
                )}
                <Text style={styles.radioButtonText}>Pick Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <Text>Menu</Text>
              <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => setSelectedMenu('Noodles')}>
                  <Text
                    style={[
                      styles.label,
                      selectedMenu === 'Noodles' && styles.selectedLabel,
                    ]}>
                    Noodles
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedMenu('Rice')}>
                  <Text
                    style={[
                      styles.label,
                      selectedMenu === 'Rice' && styles.selectedLabel,
                    ]}>
                    Rice
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedMenu('Szechwan')}>
                  <Text
                    style={[
                      styles.label,
                      selectedMenu === 'Szechwan' && styles.selectedLabel,
                    ]}>
                    Szechwan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedMenu('Chow Main')}>
                  <Text
                    style={[
                      styles.label,
                      selectedMenu === 'Chow Main' && styles.selectedLabel,
                    ]}>
                    Chow Main
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <FlatList
            keyExtractor={item => item.id.toString()}
            data={filteredData}
            renderItem={renderItem}
            numColumns={1}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Item Total {cartTotalAmount}</Text>
        </View>
        <View>
          <Text style={styles.footerText}>|</Text>
        </View>
        <View>
          {cartTotalAmount === 0 ? (
            <Text style={[styles.footerText, styles.disabledButtonText]}>
              MAKE PAYMENT
            </Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Order Receipt');
              }}>
              <Text style={styles.footerText}>MAKE PAYMENT</Text>
            </TouchableOpacity>
          )}
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
    borderRadius: 10,
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
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  icon: {
    marginLeft: 15,
    color: Color.primaryColor,
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
    // justifyContent: 'space-around',
    gap: 100,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 5,
    color: '#000',
    fontWeight: '500',
  },
  radioButtonSelected: {
    marginVertical: 10,
  },

  dtContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 30,
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: '#ccc',
  },
  food_type_text: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontWeight: '500',
    color: '#000',
    marginVertical: 5,
  },
  textaddress: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
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
  label: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    color: '#000',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  itemImageContainer: {
    marginRight: 10,
    // borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemDetailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addToCartButton: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 16,
  },
  Direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedLabel: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: Color.primaryColor,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  quantityButton: {
    fontSize: 15,
    paddingHorizontal: 2,
  },
});
