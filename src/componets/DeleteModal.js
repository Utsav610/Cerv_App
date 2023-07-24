/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../Constants/Color';

const DeleteModal = ({imageSource, itemTitle, onCancel, onDelete}) => {
  return (
    <View style={styles.modalContent}>
      {imageSource && <Image source={imageSource} style={styles.modalImage} />}
      <Text style={styles.modalTitle}>{itemTitle}</Text>
      <Text style={styles.modalText}>
        Are you sure you want to delete this category?
      </Text>
      <View style={styles.modalButtons}>
        {/* <TouchableOpacity
          style={[styles.modalButton, styles.cancelButton]}
          onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={[styles.modalButton, styles.deleteButton]}
          onPress={onDelete}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={onCancel}>
          <Text style={[styles.text, {color: '#C7C7C7'}]}>CANCEL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDelete}
          style={{
            borderLeftWidth: 1,
            paddingLeft: 50,
            borderLeftColor: Color.accentColor,
          }}>
          <Text style={[styles.text, {color: Color.primaryColor}]}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    // width: '30%',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent: 'space-evenly',
    // justifyContent: 'space-between',
    width: '70%',
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: Color.accentColor,
  },
  // modalButton: {
  //   flex: 1,
  //   paddingVertical: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  // cancelButton: {
  //   backgroundColor: '#ccc',
  //   marginRight: 10,
  // },
  // deleteButton: {
  //   backgroundColor: 'red',
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  // },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DeleteModal;
