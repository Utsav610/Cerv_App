import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {updateAddress} from '../../../store/action/action';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SavedAddress({navigation}) {
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const [selectedAddress, setSelectedAddress] = useState('Home');
  const dispatch = useDispatch();

  const handleCircleIconPress = address => {
    setSelectedAddress(address);

    dispatch(updateAddress(address));
  };

  useEffect(() => {
    fetchCouponData();
  }, []);

  const fetchCouponData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch('http://43.204.219.99:8080/get-address', {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
    } catch (error) {
      console.error('Error fetching Coupon data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Home</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Home' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Home')}>
          {selectedAddress === 'Home' ? (
            <Icon name="circle-slice-8" size={20} color={Color.primaryColor} />
          ) : (
            <FontAwesome5 name="circle" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Farm</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Farm' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Farm')}>
          {selectedAddress === 'Farm' ? (
            <Icon name="circle-slice-8" size={20} color={Color.primaryColor} />
          ) : (
            <FontAwesome5 name="circle" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Garden</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Garden' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Garden')}>
          {selectedAddress === 'Garden' ? (
            <Icon name="circle-slice-8" size={20} color={Color.primaryColor} />
          ) : (
            <FontAwesome5 name="circle" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Farm House</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Farm House' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Farm House')}>
          {selectedAddress === 'Farm House' ? (
            <Icon name="circle-slice-8" size={20} color={Color.primaryColor} />
          ) : (
            <FontAwesome5 name="circle" size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.whiteColor,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: Color.accentColor,
  },
  addressTextContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.blackColor,
  },
  text: {
    width: '80%',
    fontSize: 16,
  },
  cameraIconContainer: {
    marginLeft: 'auto',
  },
});
