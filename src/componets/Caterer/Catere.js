import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../Constants/Color';
import StarRating from 'react-native-star-rating-widget';

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
            <Text style={styles.name}>St John & Thomans Catering</Text>
            <Text style={styles.address}>
              3200 Williams treet , Nathan Road , MA
            </Text>
            <Text style={styles.address}>$80.00/Per Dish</Text>
            <StarRating
              rating={4}
              totalStars={5}
              starColor="#FACC02"
              emptyStarColor="transparent"
              starSize={20}
            />
          </View>
          <TouchableOpacity style={styles.heartIconContainer}>
            <FontAwesome5 name="heart" size={25} color={'#8e8e8e'} />
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
    color: '#000',
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
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
