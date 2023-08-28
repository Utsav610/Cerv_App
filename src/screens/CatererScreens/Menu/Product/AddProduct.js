/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import Color from '../../../../constants/Color';
// import CustomButton from '../../../../components/customeButton';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Images from '../../../../constants/Images';

// const AddProduct = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={[styles.text, {marginLeft: 10}]}>Category Name</Text>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={Images.CATERER} style={styles.image} />
//             <TouchableOpacity style={styles.closeIconContainer}>
//               <Icon name="window-close" size={20} color={Color.whiteColor} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.itemContainer}>
//           <View>
//             <Text style={styles.text}>Category Name</Text>
//           </View>
//           <Text style={styles.boldtext}>Noodle</Text>
//         </View>
//         <View style={styles.itemContainer}>
//           <View>
//             <Text style={styles.text}>Category Name</Text>
//           </View>
//           <Text style={styles.boldtext}>House Noodle</Text>
//         </View>
//         <View style={styles.itemContainer}>
//           <View>
//             <Text style={styles.text}>Description</Text>
//           </View>
//           <Text style={styles.boldtext}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s,
//           </Text>
//         </View>
//         <View style={[styles.manage, styles.itemContainer]}>
//           <Text style={styles.itemText}>Size</Text>
//           <View
//             style={{
//               width: '55%',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View style={[styles.quantityContainer]}>
//               <Text style={styles.itemText}>Quantity</Text>
//             </View>
//             <Text style={styles.itemText}>Price</Text>
//           </View>
//         </View>

//         <View style={[styles.manage, styles.itemContainer]}>
//           <Text style={styles.boldtext}>Regular</Text>
//           <View
//             style={{
//               width: '63%',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View style={[styles.quantityContainer, {width: '50%'}]}>
//               <TouchableOpacity>
//                 <Text style={[styles.quantityButton]}>
//                   <Icon name="minus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//               <Text style={styles.boldtext}>1</Text>
//               <TouchableOpacity>
//                 <Text style={styles.quantityButton}>
//                   <Icon name="plus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.boldtext}>$12</Text>
//           </View>
//         </View>

//         {/* <View style={styles.itemContainer}>
//           <View style={styles.direction}>
//             <Text style={styles.boldtext}>Regular</Text>
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity style={styles.quantityButton}>
//                 <Text style={styles.quantityButtonText}>-</Text>
//               </TouchableOpacity>
//               <Text style={styles.boldtext}>120</Text>
//               <TouchableOpacity style={styles.quantityButton}>
//                 <Text style={styles.quantityButtonText}>+</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.boldtext}>$350.00</Text>
//           </View>
//         </View> */}
//         <View style={[styles.manage, styles.itemContainer]}>
//           <Text style={styles.boldtext}>Small</Text>
//           <View
//             style={{
//               width: '63%',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View style={[styles.quantityContainer, {width: '50%'}]}>
//               <TouchableOpacity>
//                 <Text style={[styles.quantityButton]}>
//                   <Icon name="minus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//               <Text style={styles.boldtext}>120</Text>
//               <TouchableOpacity>
//                 <Text style={styles.quantityButton}>
//                   <Icon name="plus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.boldtext}>$120.00</Text>
//           </View>
//         </View>
//         <View style={[styles.manage, styles.itemContainer]}>
//           <Text style={styles.boldtext}>Medium</Text>
//           <View
//             style={{
//               width: '63%',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View style={[styles.quantityContainer, {width: '50%'}]}>
//               <TouchableOpacity>
//                 <Text style={[styles.quantityButton]}>
//                   <Icon name="minus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//               <Text style={styles.boldtext}>120</Text>
//               <TouchableOpacity>
//                 <Text style={styles.quantityButton}>
//                   <Icon name="plus" size={20} color={Color.primaryColor} />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.boldtext}>$120.00</Text>
//           </View>
//         </View>
//       </ScrollView>
//       <CustomButton
//         title={'Submit'}
//         onPress={() => {
//           navigation.goBack();
//         }}
//       />
//     </View>
//   );
// };

// export default AddProduct;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     marginHorizontal: 5,
//   },
//   imageContainer: {
//     alignItems: 'center',
//   },
//   image: {
//     width: '95%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   itemContainer: {
//     marginTop: 10,
//     paddingHorizontal: 5,
//     paddingVertical: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: Color.accentColor,
//   },
//   boldtext: {
//     fontSize: 16,
//     color: Color.blackColor,
//   },
//   direction: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     gap: 80,
//   },
//   closeIconContainer: {
//     position: 'absolute',
//     top: 10,
//     right: 15,
//     backgroundColor: Color.primaryColor,
//     borderRadius: 20,
//     padding: 3,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   quantityButton: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 15,
//   },
//   quantityButtonText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   manage: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import CustomButton from '../../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {addCategory} from '../../../store/action/action';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';
import Images from '../../../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddProduct({navigation, route}) {
  const isEditing = route.params.action == 'edit';
  const initialCategoryName = isEditing ? route.params.title : '';
  const initialCategoryImage = isEditing ? route.params.image : null;
  const id = route.params.id;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Product' : 'Add Product',
    });
  }, [navigation, isEditing]);

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const [categoryName, setCategoryName] = useState(initialCategoryName);
  const [categoryNameError, setcategoryNameError] = useState('');
  const [productImage, setcategoryImage] = useState(initialCategoryImage);
  const [description, setDescription] = useState('');
  const [descriptionError, setdescriptionError] = useState('');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');

  const selectCategory = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setcategoryImage(image);
    });
  };

  const validateName = () => {
    if (categoryName.trim() === '') {
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (validateName()) {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if (isEditing) {
        const formData = new FormData();
        formData.append('title', categoryName);
        formData.append('image', {
          uri: productImage.path,
          name: productImage.path,
          type: productImage.mime,
        });
        formData.append('description', description);
        formData.append('price', price);
        const url = `http://43.204.219.99:8080/caterer/edit-item/${id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + JSON.parse(token),
          },
          body: JSON.stringify(formData),
        })
          .then(async res => {
            const response = await res.json();
            console.log(response);
            if (response.status === 1) {
              navigation.goBack();
            }
          })
          .catch(error => console.log(error));
      } else {
        const formData = new FormData();
        formData.append('title', categoryName);
        formData.append('image', {
          uri: productImage.path,
          name: productImage.path,
          type: productImage.mime,
        });
        formData.append('categoryId ', id);
        formData.append('description', description);
        formData.append('price', price);

        const url = 'http://43.204.219.99:8080/caterer/add-item';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + JSON.parse(token),
          },
          body: JSON.stringify(formData),
        })
          .then(async res => {
            const response = await res.json();
            console.log(response);
            if (response.status === 1) {
              navigation.goBack();
            }
          })
          .catch(error => console.log(error));
      }
    }
  };

  const validName = name => {
    console.log('>>', name);
    return name.trim() !== '';
  };
  const validateDescription = description => {
    console.log(description);
    return description.trim() !== '';
  };
  const validatePrice = number => {
    return number.trim() !== '';
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={{marginBottom: 10}}>Category Photo</Text>
          {productImage ? (
            <View>
              <Image source={{uri: productImage.path}} style={styles.image} />
              <TouchableOpacity
                onPress={selectCategory}
                style={styles.editButton}>
                <Icon name={'pencil'} size={20} color={'#FFFF'} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.Uploadbtn} onPress={selectCategory}>
              <Text>Upload Product Photo</Text>
            </TouchableOpacity>
          )}
          <View>
            <Text>Item Name</Text>
            <TextInput
              style={styles.textInput}
              value={categoryName}
              onChangeText={text => {
                setCategoryName(text);
                setcategoryNameError('');
              }}
              onBlur={() => {
                if (!validName(categoryName)) {
                  setcategoryNameError('Please enter categoryName');
                }
              }}
            />
          </View>
          {categoryNameError ? (
            <Text style={styles.errorText}>{categoryNameError}</Text>
          ) : null}

          <View>
            <Text>Description</Text>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={text => {
                setDescription(text);
                setdescriptionError('');
              }}
              onBlur={() => {
                if (!validateDescription(description)) {
                  setdescriptionError('Please enter description');
                }
              }}
            />
          </View>
          {descriptionError ? (
            <Text style={styles.errorText}>{descriptionError}</Text>
          ) : null}

          <View>
            <Text>Price</Text>
            <TextInput
              style={styles.textInput}
              value={price}
              onChangeText={text => {
                setPrice(text);
                setPriceError('');
              }}
              onBlur={() => {
                if (!validatePrice(price)) {
                  setPriceError('Please enter price');
                }
              }}
            />
          </View>
          {priceError ? (
            <Text style={styles.errorText}>{priceError}</Text>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title={isEditing ? 'Update' : 'Save'}
          onPress={() => {
            handleSave();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 3,
    marginVertical: 5,
  },
  Uploadbtn: {
    backgroundColor: '#CCCC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  editButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 5,
  },
  errorText: {
    color: 'red',
  },
});
