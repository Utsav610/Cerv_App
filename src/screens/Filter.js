import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../componets/CustomeButton';
export default function Filter({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 4, backgroundColor: 'white'}} />

      <View style={{flex: 3, backgroundColor: 'white'}}>
        <View style={styles.infoCotanier}>
          <Text style={styles.text}>Filter</Text>
          <View style={styles.content}>
            <View style={styles.info}>
              <Text style={styles.text}>Catere by Rating</Text>
              <FontAwesome5 name={'filter'} size={20} color={'#931314'} />
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>Catere by Price Low to High</Text>
              <FontAwesome5 name={'filter'} size={20} color={'#931314'} />
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>Catere by Price High to Low</Text>
              <FontAwesome5 name={'filter'} size={20} color={'#931314'} />
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>Catere by Distance</Text>
              <FontAwesome5 name={'filter'} size={20} color={'#931314'} />
            </View>
          </View>
          <View>
            <CustomButton
              title={'Apply'}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  infoCotanier: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  content: {
    marginBottom: 20,
  },
});
