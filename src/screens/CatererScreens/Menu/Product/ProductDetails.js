/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Color from '../../../../constants/Color';
import CustomButton from '../../../../components/CustomeButton';
import Images from '../../../../constants/Images';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.CATERER} style={styles.image} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.text}>Category Name</Text>
          </View>
          <Text style={styles.boldtext}>Noodle</Text>
        </View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.text}>Category Name</Text>
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
        <View style={[styles.manage, styles.itemContainer]}>
          <Text style={styles.itemText}>Size</Text>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.quantityContainer]}>
              <Text style={styles.itemText}>Quantity</Text>
            </View>
            <Text style={styles.itemText}>Price</Text>
          </View>
        </View>

        <View style={[styles.manage, styles.itemContainer]}>
          <Text style={styles.boldtext}>Regular</Text>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.quantityContainer, {width: '50%'}]}>
              <Text style={styles.boldtext}>120</Text>
            </View>
            <Text style={styles.boldtext}>$12</Text>
          </View>
        </View>

        {/* <View style={styles.itemContainer}>
          <View style={styles.direction}>
            <Text style={styles.boldtext}>Regular</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.boldtext}>120</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.boldtext}>$350.00</Text>
          </View>
        </View> */}
        <View style={[styles.manage, styles.itemContainer]}>
          <Text style={styles.boldtext}>Small</Text>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.quantityContainer, {width: '50%'}]}>
              <Text style={styles.boldtext}>120</Text>
            </View>
            <Text style={styles.boldtext}>$120.00</Text>
          </View>
        </View>
        <View style={[styles.manage, styles.itemContainer]}>
          <Text style={styles.boldtext}>Medium</Text>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.quantityContainer, {width: '50%'}]}>
              <Text style={styles.boldtext}>120</Text>
            </View>
            <Text style={styles.boldtext}>$120.00</Text>
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
    color: Color.blackColor,
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 80,
  },
  manage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
