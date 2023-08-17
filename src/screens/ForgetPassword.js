import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../components/customeButton';
import Color from '../constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default function MobileNumber({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image
            source={require('../assest/bg.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.textconatiner}>
            <Text style={styles.text}>
              Please enter the email address below, you will receive a link to
              create a new password via email
            </Text>
          </View>
          <Text>Email</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name={'envelope'}
              size={20}
              color={Color.primaryColor}
            />

            <TextInput placeholder="john123@gmail.com" style={styles.input} />
          </View>
          <CustomButton
            title="Send Now"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    height: 150,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.primaryColor,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
  },
  textconatiner: {
    fontSize: 20,
    marginVertical: 30,
  },
  text: {fontSize: 16},
});
