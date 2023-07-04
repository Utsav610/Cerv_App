import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../Constants/Color';

export default function MealDetails({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Product');
          }}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Noodle</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.direction}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome5 name={'edit'} size={20} color={'green'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome5 name={'trash'} size={20} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name={'plus-circle'} size={20} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginVertical: 15,
  },
  labelContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
  },
  labelText: {
    marginLeft: 10,
  },
  iconContainer: {
    borderColor: Color.accentColor,
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
  direction: {
    flexDirection: 'row',
  },
});
