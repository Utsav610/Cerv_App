import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../Constants/Color';

export default function SavedAddress() {
  const [selectedAddress, setSelectedAddress] = useState('Home');

  const handleCircleIconPress = address => {
    setSelectedAddress(address);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Home</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Home' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Home')}>
          <FontAwesome5 name="circle" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Farm</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Farm' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Farm')}>
          <FontAwesome5 name="circle" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Garden</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Garden' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Garden')}>
          <FontAwesome5 name="circle" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Farm House</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.cameraIconContainer,
            selectedAddress === 'Farm House' && styles.selectedIcon,
          ]}
          onPress={() => handleCircleIconPress('Farm House')}>
          <FontAwesome5 name="circle" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: Color.accentColor,
  },
  addressTextContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    width: '80%',
    fontSize: 16,
  },
  cameraIconContainer: {
    marginLeft: 'auto',
  },
  selectedIcon: {
    backgroundColor: 'green',
  },
});
