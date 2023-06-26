import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Categories from '../../componets/Categories/Categories';
import CategoriesData from '../../data/Categories_data';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredData = CategoriesData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="search" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <Text style={styles.text}>Top categories</Text>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={filteredData}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    fontSize: 20,
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  gridItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#ffff',
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
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
});
