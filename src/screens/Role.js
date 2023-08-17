/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../constants/Color';
import {useDispatch} from 'react-redux';
import {updateRole} from '../store/action/action';
export default function OptionScreen({navigation}) {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);

    dispatch(updateRole(option));
  };

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Select Your Role</Text>
        <Text style={styles.subtext}>
          How do you want to use{' '}
          <Text style={{color: Color.primaryColor}}> CERV ?</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.optionContainer}>
          <View>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'Customer'
                  ? styles.selectedOptionButton
                  : null,
              ]}
              onPress={() => handleOptionSelect('Customer')}>
              <FontAwesome5
                name={'user'}
                size={60}
                color={
                  selectedOption === 'Customer'
                    ? Color.whiteColor
                    : Color.accentColor
                }
              />
            </TouchableOpacity>
            <Text style={styles.RoleText}>Customer</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'Caterer'
                  ? styles.selectedOptionButton
                  : null,
              ]}
              onPress={() => handleOptionSelect('Caterer')}>
              <FontAwesome5
                name={'utensils'}
                size={60}
                color={
                  selectedOption === 'Caterer'
                    ? Color.whiteColor
                    : Color.accentColor
                }
              />
            </TouchableOpacity>
            <Text style={styles.RoleText}> Caterer</Text>
          </View>
        </View>

        {selectedOption && (
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('Login', {role: selectedOption})
            }>
            <Text style={styles.selectedOptionButtonText}>
              I'm {selectedOption}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  optionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 50,
    height: '80%',
  },
  optionButton: {
    alignItems: 'center',
    borderRadius: 75,
    width: 140,
    height: 140,
    backgroundColor: '#EEE',
    justifyContent: 'center',
  },
  selectedOptionButton: {
    backgroundColor: Color.primaryColor,
  },
  selectedOptionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Color.primaryColor,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  textContainer: {
    margin: 10,
  },
  subtext: {
    fontSize: 20,
  },
  RoleText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 400,
    color: Color.offGrayColor,
  },
});
