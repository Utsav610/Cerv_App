import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Payment_method() {
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.cardcontainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Saved Cards</Text>
            <Text style={[styles.text, {color: '#F5694E'}]}>ADD CARD</Text>
          </View>
          <View>
            <View style={styles.card}>
              <Text>Card1</Text>
              <TouchableOpacity style={styles.cameraIconContainer}>
                <FontAwesome5 name={'check'} size={20} color={'#ccc'} />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text>Card2</Text>
              <TouchableOpacity style={styles.cameraIconContainer}>
                <FontAwesome5 name={'check'} size={20} color={'#ccc'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.payContainer}>
          <Text>Other Payment Method</Text>
          <View style={styles.card}>
            <Text>Pay1</Text>
            <TouchableOpacity style={styles.cameraIconContainer}>
              <FontAwesome5 name={'check'} size={20} color={'#ccc'} />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text>pay2</Text>
            <TouchableOpacity style={styles.cameraIconContainer}>
              <FontAwesome5 name={'check'} size={20} color={'#ccc'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    padding: 10,
    backgroundColor: '#ffff',
    marginVertical: 10,
  },
  cardcontainer: {
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#cccc',
  },
  payContainer: {
    paddingVertical: 10,
  },
  cameraIconContainer: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 15,
  },
});
