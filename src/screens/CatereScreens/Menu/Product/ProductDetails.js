/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Color from '../../../../Constants/Color';
import CustomButton from '../../../../componets/CustomeButton';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assest/catere.jpeg')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.text}>Delivery date and Time</Text>
          </View>
          <Text style={styles.boldtext}>20 November 2020 at 06:58 AM</Text>
        </View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.text}>Name</Text>
          </View>
          <Text style={styles.boldtext}>House Noodle</Text>
        </View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.text}>Description</Text>
          </View>
          <Text style={styles.boldtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>
        </View>
        <View style={styles.direction}>
          <Text>Size</Text>
          <Text>Quantity</Text>
          <Text>Price</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.direction}>
            <Text style={styles.boldtext}>Regular</Text>
            <Text style={styles.boldtext}>200</Text>
            <Text style={styles.boldtext}>$350.00</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.direction}>
            <Text style={styles.boldtext}>Small</Text>
            <Text style={styles.boldtext}>120</Text>
            <Text style={styles.boldtext}>$350.00</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.direction}>
            <Text style={styles.boldtext}>Medium</Text>
            <Text style={styles.boldtext}>120</Text>
            <Text style={styles.boldtext}>$350.00</Text>
          </View>
        </View>
      </ScrollView>
      <CustomButton
        title={'Edit Details'}
        onPress={() => {
          navigation.navigate('Edit Product');
        }}
      />
    </View>
  );
};

export default ProductDetails;

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
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  itemContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  boldtext: {
    fontSize: 16,
    color: '#000',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 80,
  },
});
