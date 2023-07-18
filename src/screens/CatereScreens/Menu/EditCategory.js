import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function EditCategory({navigation, route}) {
  const {title} = route.params;
  const initialTitle = typeof title === 'string' ? title : '';
  const [Title, setTitle] = useState(initialTitle);

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
              value={Title}
              onChangeText={setTitle}
            />
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
