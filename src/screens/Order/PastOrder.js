import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../Constants/Color';
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
        <TouchableOpacity onPress={openModal}>
          <Text style={{color: 'blue'}}>Write a Review</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          {/* <View style={styles.content}> */}
          <Text style={styles.modalHeader}>Give Feedback</Text>
          <Text>Write your FeedBack to Catere</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(index => (
              <FontAwesome5 key={index} name="star" size={16} />
            ))}
          </View>

          <TextInput
            style={styles.input}
            multiline
            placeholder="Enter your review"
          />

          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Send Review</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </Modal>
    </>
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundColor: '#ffff',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  starIcon: {
    marginRight: 5,
    color: 'gold',
  },
  input: {
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalButton: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // content: {
  //   backgroundColor: '#ffff',
  //   padding: 20,
  //   borderRadius: 10,
  // },
});
