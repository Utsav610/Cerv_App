import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SavedAddress() {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.heading}>Home</Text>
          <Text style={styles.text}>
            374 William S Canning Blvd, Fall River MA 2721
          </Text>
        </View>
        <TouchableOpacity style={styles.cameraIconContainer}>
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
        <TouchableOpacity style={styles.cameraIconContainer}>
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
        <TouchableOpacity style={styles.cameraIconContainer}>
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
        <TouchableOpacity style={styles.cameraIconContainer}>
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
    borderBottomColor: '#cccc',
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
});
