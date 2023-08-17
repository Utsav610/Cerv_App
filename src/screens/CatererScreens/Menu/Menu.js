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
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DeleteModal from '../../../components/DeleteModal';
import Color from '../../../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import Cerv_Data from '../../../data/Cerv_Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setcervData, deleteCategory} from '../../../store/action/action';
import Images from '../../../constants/Images';

export default function Menu({navigation}) {
  const dispatch = useDispatch();
  const cervData = useSelector(state => state.cerv.cervData);

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('Noodle');
  const handleDelete = () => {
    // Perform delete operation
    dispatch(deleteCategory(title));
    setModalVisible(false);
  };

  useEffect(() => {
    // Load the Cerv data when the component mounts
    dispatch(setcervData(Cerv_Data));
  }, [dispatch]);

  const renderCategory = ({item}) => (
    <View>
      <View style={styles.label}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Meal Details', {title: item.name});
          }}>
          <View style={styles.labelContent}>
            <Image source={Images.CATERER} style={styles.image} />
            <Text style={styles.labelText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                navigation.navigate('Edit Category', {title: item.name});
              }}>
              <Feather name={'edit-2'} size={20} color={Color.greenColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setModalVisible(true);
                setTitle(item.name);
              }}>
              <Feather name={'trash-2'} size={20} color={Color.redColor} />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Feather name="chevron-right" size={20} color={Color.accentColor} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cervData}
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
        <Icon name={'plus'} size={40} color={Color.whiteColor} />
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
    backgroundColor: Color.whiteColor,
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
    marginRight: 5,
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
