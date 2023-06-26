import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Cater = ({onclick}) => {
  return (
    <TouchableOpacity onPress={onclick}>
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
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(index => (
                <FontAwesome5 key={index} name="star" size={16} />
              ))}
            </View>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default Cater;
