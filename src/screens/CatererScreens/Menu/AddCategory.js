import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {addCategory} from '../../../store/action/action';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';
import Images from '../../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import mime from 'mime';

export default function AddCategory({navigation, route}) {
  const isEditing = route.params.action == 'edit';
  const initialCategoryName = isEditing ? route.params.title : '';
  const initialCategoryImage = isEditing ? route.params.image : null;
  const id = isEditing ? route.params.id : '';

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Category' : 'Add Category',
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
  const [categoryImage, setcategoryImage] = useState(initialCategoryImage);

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
      const formData = new FormData();
      formData.append('title', categoryName);
      formData.append('image', {
        uri: categoryImage.path,
        name: categoryImage.path,
        type: categoryImage.mime,
      });

      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if (isEditing) {
        const url = `http://43.204.219.99:8080/caterer/edit-category/${id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
            // 'Content-Type': 'multipart/form-data',
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
        const url = 'http://43.204.219.99:8080/caterer/add-category';
        fetch(url, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + JSON.parse(token),
          },
          body: JSON.stringify(formData),
        })
          .then(async res => {
            const response = await res.json();

            if (response.status === 1) {
              navigation.goBack();
            }
          })
          .catch(error => console.log(error));
      }
    }
  };

  const validName = name => {
    console.log(name.trim().length !== '');
    return name.trim() !== '';
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={{marginBottom: 10}}>Category Photo</Text>
          {categoryImage ? (
            <View>
              <Image source={{uri: categoryImage.path}} style={styles.image} />
              <TouchableOpacity
                onPress={selectCategory}
                style={styles.editButton}>
                <Icon name={'pencil'} size={20} color={'#FFFF'} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.Uploadbtn} onPress={selectCategory}>
              <Text>Upload Category Photo</Text>
            </TouchableOpacity>
          )}
          <View>
            <Text>Category Name</Text>
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
