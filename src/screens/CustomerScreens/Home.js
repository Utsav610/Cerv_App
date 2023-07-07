/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Silder from './Slider/Silder';
import Cater from '../../componets/Caterer/Catere';
import Color from '../../Constants/Color';
import Feather from 'react-native-vector-icons/Feather';

export default function Home({navigation}) {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name={'help-circle'} size={25} color={'#8e8e8e'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <FontAwesome5 name={'bell'} size={25} color={'#8e8e8e'} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Saved Address');
            }}>
            <Text>My Event Location</Text>
            <Text
              style={{
                color: '#000',
                fontWeight: '500',
                fontFamily: 'bold',
                fontSize: 16,
              }}>
              374 William s Canning Blvd
              <FontAwesome5 name={'sort-down'} size={25} color={'green'} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Silder />
          <View style={styles.filterContainer}>
            <Text style={styles.text}>Near by Cateres</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Filter');
              }}>
              <Feather name={'filter'} size={20} color={'#000'} />
            </TouchableOpacity>
          </View>
          <View>
            <Cater onclick={() => navigation.navigate('Details')} />
            <Cater onclick={() => console.log('2')} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    // marginBottom: 5,
    backgroundColor: '#ffff',
    elevation: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
  },
});
