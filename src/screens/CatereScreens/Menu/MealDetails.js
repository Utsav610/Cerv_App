/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../Constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import Cerv_Data from '../../../data/Cerv_Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MealDetails({navigation, route}) {
  const {title} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTextInputValue('');
  };

  const handleConfirm = () => {
    // Handle the confirmed action here
    console.log('Confirmed:', textInputValue);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  // let subcategories = [];
  // if (title === 'Noodles') {
  //   subcategories = ['Veg', 'Non-Veg', 'Chinese', 'BBQ'];
  // } else if (title === 'Rice') {
  //   subcategories = ['Veg', 'Non-Veg'];
  // } else if (title === 'Szechwan') {
  //   subcategories = ['Veg', 'Non-Veg'];
  // }

  const category = Cerv_Data.find(item => item.name === title);
  const subcategoryNames = category.subcategories.map(
    subcategory => subcategory.name,
  );

  const renderSubcategory = subcategory => (
    <>
      <View style={styles.label}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Product', {
              subcategory: subcategory,
              title: title,
            });
          }}>
          <Text style={styles.subcategoryText}>{subcategory}</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name={'edit-2'} size={20} color={'green'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name={'trash-2'} size={20} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
  return (
    <View style={styles.container}>
      {subcategoryNames.map(subcategory => renderSubcategory(subcategory))}
      <TouchableOpacity style={styles.button}>
        <Icon name={'plus'} size={40} color={'#ffffff'} onPress={openModal} />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Subcategory</Text>
            <TextInput
              style={styles.textInput}
              value={textInputValue}
              onChangeText={setTextInputValue}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={[styles.text, {color: '#C7C7C7'}]}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleConfirm}>
                <Text style={[styles.text, {color: Color.primaryColor}]}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginVertical: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background color
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#ffffff', // White background color
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 200,
  },
  modalTitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    // borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 70,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: Color.accentColor,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
