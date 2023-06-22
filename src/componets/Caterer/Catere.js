import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Cater = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props);
      }}>
      <View style={styles.container}>
        <Image
          source={require('../../assest/catere.jpeg')}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.address}>Address</Text>
            <Text style={styles.address}>$80.00/Per Dish</Text>
          </View>
          <TouchableOpacity style={styles.heartIconContainer}>
            <FontAwesome5 name="heart" size={20} color="#F5694E" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  heartIconContainer: {
    marginLeft: 10,
  },
});

export default Cater;
