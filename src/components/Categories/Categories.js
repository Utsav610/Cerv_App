import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import CategoriesData from '../../data/Categories_data';
import Color from '../../constants/Color';

export default function Categories() {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <View style={styles.itemContainer}>
          <Image source={item.img} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={CategoriesData}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: Color.whiteColor,
    overflow: 'hidden',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: Color.blackColor,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
