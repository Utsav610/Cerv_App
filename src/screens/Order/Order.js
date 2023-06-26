import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Order({navigation}) {
  const [selectedTab, setSelectedTab] = useState('current');

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };

  const renderCurrentOrder = () => {
    return (
      <View style={styles.caterOrder}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Order Detials');
          }}>
          <View style={styles.header}>
            <Image
              source={require('../../assest/catere.jpeg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.caterTitle}>
                St John & St Thomas Catering
              </Text>
              <Text>Address</Text>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Item1</Text>
              <Text>$271.80</Text>
            </View>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Item1</Text>
              <Text>$271.80</Text>
            </View>
          </View>
          <View style={styles.ItemContent}>
            <View style={styles.orderTypeDetails}>
              <Text>Order type</Text>
              <Text>Delivery</Text>
            </View>
          </View>
          <View style={styles.orderTypeDetails}>
            <Text>Order On</Text>
            <Text>date and time</Text>
          </View>
          <View style={styles.ItemContent}>
            <View>
              <Text>Amount</Text>
              <Text>$543</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Text style={{color: '#FFFF'}}>Cancel Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPastOrder = () => {
    return (
      <>
        <View style={styles.caterOrder}>
          <TouchableOpacity>
            <View style={styles.header}>
              <Image
                source={require('../../assest/catere.jpeg')}
                style={styles.image}
              />
              <View>
                <Text style={styles.caterTitle}>
                  St John & St Thomas Catering
                </Text>
                <Text>Address</Text>
              </View>
            </View>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Item1</Text>
              <Text>$271.80</Text>
            </View>
            <View style={styles.ItemContent}>
              <Text style={styles.itemText}>Item1</Text>
              <Text>$271.80</Text>
            </View>
            <View style={styles.orderTypeDetails}>
              <Text>Order type</Text>
              <Text>Delivery</Text>
            </View>
            <View style={styles.orderTypeDetails}>
              <Text>Order On</Text>
              <Text>date and time</Text>
            </View>
            <View style={styles.ItemContent}>
              <View>
                <Text>Amount</Text>
                <Text>$543</Text>
              </View>
            </View>
            <View>
              <Text style={{color: 'green'}}>
                Completed on 21/10/2020 at 01:20 PM
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rateContainer}>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(index => (
              <FontAwesome5 key={index} name="star" size={16} />
            ))}
          </View>
          <Text style={{color: 'blue'}}>Write a Review</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerOrder}>
        <View style={styles.orderContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'current' && styles.currentOrder,
            ]}
            onPress={() => handleTabPress('current')}>
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'current' && styles.selectedTabButtonText,
              ]}>
              Current Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'past' && styles.pastOrder,
            ]}
            onPress={() => handleTabPress('past')}>
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'past' && styles.selectedTabButtonText,
              ]}>
              Past Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {selectedTab === 'current' ? renderCurrentOrder() : renderPastOrder()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerOrder: {
    borderBottomWidth: 2,
    borderBottomColor: '#cccc',
  },
  orderContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    marginBottom: 10,
  },
  tabButton: {
    padding: 10,
  },
  currentOrder: {
    backgroundColor: '#F5694E',
  },
  pastOrder: {
    backgroundColor: '#F5694E',
  },
  tabButtonText: {
    color: '#000',
    fontSize: 16,
  },
  selectedTabButtonText: {
    color: '#FFF',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  caterTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  caterOrder: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ItemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  btn: {
    alignItems: 'center',
    width: 100,
    padding: 6,
    backgroundColor: '#F5694E',
    borderRadius: 5,
  },
});
