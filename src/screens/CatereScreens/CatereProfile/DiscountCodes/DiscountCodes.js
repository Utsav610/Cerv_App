import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import Color from '../../../../Constants/Color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCoupon} from '../../../../store/action/action';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackHandler} from 'react-native';

const DiscountCodes = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const coupons = useSelector(state => state.coupon);
  const dispatch = useDispatch();
  console.log(coupons);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const EditHandler = coupon => {
    navigation.navigate('Edit Discount Codes', {coupon});
    setModalVisible(false);
  };

  const DeleteHandler = couponCode => {
    console.log(couponCode);
    dispatch(deleteCoupon(couponCode));
    closeModal();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {coupons.map((coupon, index) => (
          <React.Fragment key={index}>
            <View style={styles.codeContainer}>
              <TouchableOpacity
                style={styles.dotsContainer}
                onPress={() => {
                  setSelectedCoupon(coupon);
                  openModal();
                }}>
                <Feather name={'more-vertical'} size={25} color={'#ffff'} />
              </TouchableOpacity>
              <Text style={styles.discount}>{coupon.title}</Text>
              <Text style={styles.code}>{coupon.couponCode}</Text>
            </View>
          </React.Fragment>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                EditHandler(selectedCoupon);
              }}>
              <FontAwesome5 name={'edit'} size={20} color={'#333'} />
              <Text style={styles.optionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                DeleteHandler(selectedCoupon.couponCode);
              }}>
              <Feather name={'trash-2'} size={20} color={'#333'} />
              <Text style={styles.optionText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={closeModal}>
              <Feather name={'share-2'} size={20} color={'#333'} />
              <Text style={styles.optionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Create Discount Codes');
        }}>
        <Icon name={'plus'} size={40} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
  },
  codeContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  dotsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,

    height: 30,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#fff',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
  },
  discount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  scrollViewContent: {
    // width: 500,
  },
});

export default DiscountCodes;
