import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../Constants/Color';
import StarRating from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cater = ({onClick, name, address, price, favaroite}) => {
  // console.log(favaroite);
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onClick} useForeground>
          <View style={styles.container}>
            <Image
              source={require('../../assest/catere.jpeg')}
              style={styles.image}
            />
            <View style={styles.contentContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.address}>${price}/Per Dish</Text>
                <StarRating
                  rating={4}
                  totalStars={5}
                  starColor="#FACC02"
                  emptyStarColor="transparent"
                  starSize={20}
                />
              </View>
              {favaroite ? (
                <TouchableOpacity style={styles.heartIconContainer}>
                  <Icon name="heart" size={25} color={Color.primaryColor} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.heartIconContainer}>
                  <FontAwesome5 name="heart" size={25} color={'#8e8e8e'} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // marginBottom: 10,
    backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    // elevation: 2,
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
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    // height: 300,
    marginBottom: 10,
  },
});

export default Cater;
