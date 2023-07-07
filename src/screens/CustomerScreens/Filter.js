import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../componets/CustomeButton';
import Color from '../../Constants/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Filter({navigation}) {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterSelect = filter => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 4, backgroundColor: 'white'}} />

      <View style={{flex: 3, backgroundColor: 'white'}}>
        <View style={styles.infoCotanier}>
          <Text style={styles.text}>Filter</Text>
          <View style={styles.content}>
            <TouchableOpacity
              style={[
                styles.info,
                selectedFilter === 'rating' && styles.selectedFilter,
              ]}
              onPress={() => handleFilterSelect('rating')}>
              <Text style={styles.text}>Catere by Rating</Text>
              {selectedFilter === 'rating' ? (
                <Icon
                  name="circle-slice-8"
                  size={20}
                  color={Color.primaryColor}
                />
              ) : (
                <FontAwesome5
                  name={'circle'}
                  size={20}
                  color={Color.primaryColor}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.info,
                selectedFilter === 'lowToHigh' && styles.selectedFilter,
              ]}
              onPress={() => handleFilterSelect('lowToHigh')}>
              <Text style={styles.text}>Catere by Price Low to High</Text>
              {selectedFilter === 'lowToHigh' ? (
                <Icon
                  name="circle-slice-8"
                  size={20}
                  color={Color.primaryColor}
                />
              ) : (
                <FontAwesome5
                  name={'circle'}
                  size={20}
                  color={Color.primaryColor}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.info,
                selectedFilter === 'highToLow' && styles.selectedFilter,
              ]}
              onPress={() => handleFilterSelect('highToLow')}>
              <Text style={styles.text}>Catere by Price High to Low</Text>
              {selectedFilter === 'highToLow' ? (
                <Icon
                  name="circle-slice-8"
                  size={20}
                  color={Color.primaryColor}
                />
              ) : (
                <FontAwesome5
                  name={'circle'}
                  size={20}
                  color={Color.primaryColor}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.info,
                selectedFilter === 'distance' && styles.selectedFilter,
              ]}
              onPress={() => handleFilterSelect('distance')}>
              <Text style={styles.text}>Catere by Distance</Text>
              {selectedFilter === 'distance' ? (
                <Icon
                  name="circle-slice-8"
                  size={20}
                  color={Color.primaryColor}
                />
              ) : (
                <FontAwesome5
                  name={'circle'}
                  size={20}
                  color={Color.primaryColor}
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <CustomButton
              title={'Apply'}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  infoCotanier: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  content: {
    marginBottom: 20,
  },
  selectedFilter: {
    backgroundColor: '#F6F6F6',
  },
});
