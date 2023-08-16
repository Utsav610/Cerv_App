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
import Color from '../../constants/Color';
import Menu_data from '../../data/Menu_data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating-widget';
import {useDispatch, useSelector} from 'react-redux';
import * as cartAction from '../../store/action/action';
import {BackHandler} from 'react-native';
import Images from '../../constants/Images';
import CommonMenu from '../CommonMenu';
import RadioButton from '../RadioButton';

const CatererDetails = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const menuItems = ['Noodles', 'Rice', 'Szechwan', 'Chow Main'];

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

  const renderItem = ({item}) => {
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
                        <Icon name="minus" size={20} color={Color.redColor} />
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(cartAction.addToCart(item))}>
                      <Text style={styles.quantityButton}>
                        <Icon name="plus" size={20} color={Color.greenColor} />
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
              <Image source={Images.CATERER} style={styles.image} />
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

              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <View>
                <TouchableOpacity onPress={showAndroidTimePicker}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.androidDatePickerText}>
                      {selectedTime.toLocaleTimeString()}
                    </Text>
                    <FontAwesome5 name="clock" size={20} style={styles.icon} />
                  </View>
                </TouchableOpacity>

                {showTimePicker && (
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
              <RadioButton
                label="Delivery"
                isSelected={orderType === 'delivery'}
                onPress={() => handleOrderTypeChange('delivery')}
              />
              <RadioButton
                label="Pick Up"
                isSelected={orderType === 'pickup'}
                onPress={() => handleOrderTypeChange('pickup')}
              />
            </View>
          </View>
          <View>
            <View>
              <Text>Menu</Text>
              <View style={styles.menuContainer}>
                {menuItems.map(item => (
                  <CommonMenu
                    key={item}
                    label={item}
                    selectedMenu={selectedMenu}
                    onSelectMenu={setSelectedMenu}
                  />
                ))}
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
          <Text style={styles.footerText}>Item Total ${cartTotalAmount}</Text>
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

export default CatererDetails;

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
    borderBottomColor: Color.accentColor,
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
    borderColor: Color.accent2Color,
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
    color: Color.blackColor,
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
    color: Color.blackColor,
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
    borderBottomColor: Color.accent2Color,
  },
  food_type_text: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontWeight: '500',
    color: Color.blackColor,
    marginVertical: 5,
  },
  textaddress: {
    fontSize: 14,
    marginBottom: 5,
    color: Color.blackColor,
  },
  footer: {
    height: 50,
    backgroundColor: Color.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerText: {
    color: Color.whiteColor,
    fontWeight: 'bold',
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
    borderBottomColor: Color.accentColor,
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
    color: Color.whiteColor,
    backgroundColor: Color.primaryColor,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Color.blackColor,
  },
  quantityButton: {
    fontSize: 15,
    paddingHorizontal: 2,
  },
});
