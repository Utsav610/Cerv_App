import {FlatList, Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Sildes from '../../../data/Dummy_data';
import SilderItem from './silderItem';
import Pagination from './Pagination';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Slider = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0]?.index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch('http://43.204.219.99:8080/get-banners', {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
      const jsonData = await response.json();

      setData(jsonData.banners);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <SilderItem item={item} />}
          // keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />

        <Pagination data={data} scrollX={scrollX} index={index} />
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {},
});
