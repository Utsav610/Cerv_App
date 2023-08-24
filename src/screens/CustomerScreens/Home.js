/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Silder from './Slider/Silder';
import Cater from '../../components/Caterer/Caterer';
import Color from '../../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import Caterer_data from '../../data/Caterer_data';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation, route}) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [Caterer, setCaterer] = useState([]);

  useEffect(() => {
    if (route.params) {
      setSelectedFilter(route.params);
    }
  }, [route.params]);

  const Adress = useSelector(state => state.address.Adress);

  useEffect(() => {
    fetchCaterer();
  }, []);

  const fetchCaterer = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      const response = await fetch(
        'http://43.204.219.99:8080/caterers/lat/lng',
        {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(token),
          },
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('data', data.caterer);
      setCaterer(data);
    } catch (error) {
      console.error('Error fetching Coupon data:', error);
    }
  };

  console.log('>>>>Caterer', Caterer);

  useEffect(() => {
    const applyFilter = (filter, data) => {
      switch (filter) {
        case 'rating':
          return data;

        case 'lowToHigh':
          return data.slice().sort((a, b) => a.price - b.price);

        case 'highToLow':
          return data.slice().sort((a, b) => b.price - a.price);

        case 'distance':
          return data;

        default:
          return data;
      }
    };

    setFilteredData(applyFilter(selectedFilter, Caterer_data));
  }, [selectedFilter]);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather
              name={'help-circle'}
              size={25}
              color={Color.offGrayColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <FontAwesome5 name={'bell'} size={25} color={Color.offGrayColor} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Saved Address');
            }}>
            <Text>My Event Location</Text>
            <Text
              style={{
                color: Color.blackColor,
                fontWeight: '500',
                fontFamily: 'bold',
                fontSize: 16,
              }}>
              {Adress}
              <FontAwesome5
                name={'sort-down'}
                size={25}
                color={Color.greenColor}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Silder />
          <View style={styles.filterContainer}>
            <Text style={styles.text}>Near by Cateres</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Filter');
              }}>
              <Feather name={'filter'} size={20} color={Color.blackColor} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={selectedFilter ? filteredData : Caterer_data}
              renderItem={({item}) => (
                <Cater
                  name={item.name}
                  address={item.Address}
                  price={item.price}
                  favorite={item.favorite}
                  onClick={() =>
                    navigation.navigate('Details', {
                      name: item.name,
                      address: item.Address,
                      price: item.price,
                    })
                  }
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    // marginBottom: 5,
    backgroundColor: Color.whiteColor,
    elevation: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    color: Color.blackColor,
  },
});
