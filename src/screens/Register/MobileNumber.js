import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../componets/CustomeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Color from '../../Constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import {storeMobile} from '../../store/action/action';
import {useDispatch} from 'react-redux';

export default function MobileNumber({navigation}) {
  const dispatch = useDispatch();
  const [number, setnumber] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image
            source={require('../../assest/bg.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.textconatiner}>
            <Text>We'll send you a verification code.</Text>
            <Text>Just enter your phone number below</Text>
          </View>
          <Text>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Feather name={'phone'} size={20} color={Color.primaryColor} />
            <Text>{' +91 |'}</Text>
            <TextInput
              placeholder="1234567890"
              style={styles.input}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={text => {
                setnumber(text);
              }}
            />
          </View>
          <CustomButton
            title="Send Code"
            onPress={() => {
              dispatch(storeMobile(number));
              navigation.navigate('Otp Verify');
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
    borderColor: Color.accentColor,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
  },
  textconatiner: {
    marginVertical: 30,
  },
});
