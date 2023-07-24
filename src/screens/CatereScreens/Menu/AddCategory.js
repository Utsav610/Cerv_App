import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {addCategory} from '../../../store/action/action';
import {useDispatch} from 'react-redux';

export default function EditCategory({navigation}) {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();
  const handleSave = () => {
    // Create a new category object with the necessary data
    const newCategory = {
      name: categoryName,
      subcategories: [], // Add subcategories if needed
    };

    // Dispatch the action to add the new category
    dispatch(addCategory(newCategory));

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={{marginBottom: 10}}>Category Photo</Text>
          <Image
            source={require('../../../assest/catere.jpeg')}
            style={styles.image}
          />
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
