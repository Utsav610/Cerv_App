import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import Color from '../../Constants/Color';

export default function CatereItem() {
  return (
    <View>
      <View style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Image
            source={require('../../assest/silder1.jpeg')}
            style={styles.itemImage}
          />
        </View>
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Chicken Fried Rice</Text>
          <Text style={styles.itemDescription}>
            Delicious fried rice with chicken, vegetables, and special spices.
          </Text>
          <View style={styles.Direction}>
            <Text style={styles.itemPrice}>$9.99</Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <FontAwesome5
                  name={'cart-plus'}
                  size={15}
                  color={Color.primaryColor}
                  style={{marginRight: 5}}
                />
                <Text style={styles.addToCartButtonText}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemDetailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addToCartButton: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 16,
  },
  Direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImageContainer: {
    marginRight: 10,
  },
  itemImage: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
});
