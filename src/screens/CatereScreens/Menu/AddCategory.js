import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import CustomButton from '../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function EditCategory({navigation}) {
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
            <TextInput style={styles.textInput} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title={'Save'}
          onPress={() => {
            navigation.navigate('CatereLogin');
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
