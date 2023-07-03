import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CurrentOrder from './CurrentOrder';
import PastOrder from './PastOrder';
import Color from '../../Constants/Color';
export default function Order({navigation}) {
  const [selectedTab, setSelectedTab] = useState('current');

  const handleTabPress = tab => {
    setSelectedTab(tab);
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
        {selectedTab === 'current' ? (
          <CurrentOrder navigation={navigation} />
        ) : (
          <PastOrder />
        )}
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
    borderBottomColor: Color.accentColor,
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
    backgroundColor: Color.primaryColor,
  },
  pastOrder: {
    backgroundColor: Color.primaryColor,
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
    borderBottomColor: Color.accentColor,
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
    borderBottomColor: Color.accentColor,
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
    borderBottomColor: Color.accentColor,
  },
  btn: {
    alignItems: 'center',
    width: 100,
    padding: 6,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
  },
});
