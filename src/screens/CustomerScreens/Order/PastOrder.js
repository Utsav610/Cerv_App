import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../Constants/Color';

export default function PastOrder() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.caterOrder}>
        <TouchableOpacity>
          <View style={styles.header}>
            <Image
              source={require('../../../assest/catere.jpeg')}
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
            <Text style={{color: Color.blackColor}}>$271.80</Text>
          </View>
          <View style={styles.ItemContent}>
            <Text style={styles.itemText}>Item1</Text>
            <Text style={{color: Color.blackColor}}>$271.80</Text>
          </View>

          <View style={styles.orderTypeDetails}>
            <Text>Order On</Text>
            <Text style={{color: Color.blackColor}}>
              20 Nov 2020 at 06:58 AM
            </Text>
          </View>
          <View style={styles.ItemContent}>
            <View>
              <Text>Amount</Text>
              <Text style={{color: Color.blackColor}}>$543</Text>
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
        <TouchableOpacity onPress={openModal}>
          <Text style={{color: 'blue'}}>Write a Review</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        transparent
        animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Give Feedback</Text>
            <Text style={styles.modalSubtitle}>
              Write your Feedback to Catere
            </Text>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(index => (
                <FontAwesome5 key={index} name="star" size={16} />
              ))}
            </View>

            <TextInput style={styles.textInput} multiline />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={closeModal}>
                <Text style={[styles.text, {color: '#C7C7C7'}]}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={closeModal}>
                <Text style={[styles.text, {color: Color.primaryColor}]}>
                  SEND REVIEW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  caterOrder: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: Color.accentColor,
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
    color: Color.blackColor,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Color.blackColor,
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background color
  },
  modalContent: {
    backgroundColor: '#ffffff', // White background color
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: Color.accentColor,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
