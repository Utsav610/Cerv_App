/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DeleteModal from '../../../componets/DeleteModal';
import Color from '../../../Constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import Cerv_Data from '../../../data/Cerv_Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Menu({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, settitle] = useState('Noodle');
  const handleDelete = () => {
    // Perform delete operation

    setModalVisible(false);
  };

  const renderCategory = ({item}) => (
    <View>
      <View style={styles.label}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Meal Details', {title: item.name});
          }}>
          <View style={styles.labelContent}>
            <Image
              source={require('../../../assest/catere.jpeg')}
              style={styles.image}
            />
            <Text style={styles.labelText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              navigation.navigate('Edit Category', {title: item.name});
            }}>
            <Feather name={'edit-2'} size={20} color={'green'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setModalVisible(true);
              settitle(item.name);
            }}>
            <Feather name={'trash-2'} size={20} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Cerv_Data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCategory}
      />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <DeleteModal
            imageSource={require('../../../assest/catere.jpeg')}
            itemTitle={title}
            onCancel={() => setModalVisible(false)}
            onDelete={handleDelete}
          />
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Add Category');
        }}>
        <Icon name={'plus'} size={40} color={'#ffffff'} />
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
});
