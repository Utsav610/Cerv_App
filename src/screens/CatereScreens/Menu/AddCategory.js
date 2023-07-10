import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import CustomButton from '../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function EditCategory() {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>Category Photo</Text>
        <Image
          source={require('../../../assest/catere.jpeg')}
          style={styles.image}
        />
        <View>
          <Text>Category Name</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton title={'Save'} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  btnContainer: {
    alignSelf: 'center',
    width: '100%',
  },
});
