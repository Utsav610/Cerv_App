import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import CustomButton from '../../../componets/CustomeButton';

export default function AddNewcard({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={require('../../../assest/masterCard.png')}
          style={styles.cardImage}
        />
        <Image
          source={require('../../../assest/visa.png')}
          style={styles.cardImage}
        />
        <Image
          source={require('../../../assest/Rupay.png')}
          style={styles.cardImage}
        />
        <Image
          source={require('../../../assest/masterCard.png')}
          style={styles.cardImage}
        />
      </View>
      <View>
        <Text style={styles.label}>CARD NUMBER</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.direction}>
        <View>
          <Text style={styles.label}>EXPIRATION DATE</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>CVV</Text>
          <TextInput secureTextEntry style={styles.input} />
        </View>
      </View>
      <View>
        <Text style={styles.label}>CARD HOLDER'S</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <CustomButton
          title={'Confirm'}
          onPress={() => {
            navigation.goBack();
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
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardImage: {
    width: 70,
    height: 45,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
