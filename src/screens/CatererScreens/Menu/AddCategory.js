import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../../components/customeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {addCategory} from '../../../store/action/action';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';
import Images from '../../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditCategory({navigation}) {
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

  const [categoryName, setCategoryName] = useState('');

  const handleSave = async () => {
    const token = await AsyncStorage.getItem('token');
    const url = 'http://43.204.219.99:8080/caterer/add-category';

    const requestBody = {
      title: categoryName,
      image: '',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(token),
      },
      body: JSON.stringify(requestBody),
    })
      .then(async res => {
        console.log('res');
        const response = await res.json();
        console.log(response);
        if (response.status === 1) {
          navigation.goBack();
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={{marginBottom: 10}}>Category Photo</Text>
          <Image source={Images.CATERER} style={styles.image} />
          <View>
            <Text>Category Name</Text>
            <TextInput
              style={styles.textInput}
              value={categoryName}
              onChangeText={setCategoryName}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title={'Save'}
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
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 3,
    marginVertical: 5,
  },
});
