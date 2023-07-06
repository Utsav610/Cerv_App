import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../Constants/Color';
import {useDispatch} from 'react-redux';
import {updateRole} from '../store/action/action';
export default function OptionScreen({navigation}) {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    // console.log(option);
    dispatch(updateRole(option));
  };

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Select Your Role</Text>
        <Text style={styles.subtext}>
          How do you want to use <Text style={{color: '#FF7722'}}> CERV ?</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.optionContainer}>
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
              color={selectedOption === 'Customer' ? '#ffffff' : '#CCC'}
            />
            <Text>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Caterer' ? styles.selectedOptionButton : null,
            ]}
            onPress={() => handleOptionSelect('Caterer')}>
            <FontAwesome5
              name={'utensils'}
              size={60}
              color={selectedOption === 'Caterer' ? '#ffff' : '#CCC'}
            />
            <Text>Caterer</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-evenly', // Adjusted spacing
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
});
