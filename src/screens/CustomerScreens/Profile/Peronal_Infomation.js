import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomerPersonalInfo from '../../../componets/Personal Information/CustomerPersonalInfo';
import CaterePersonalInfo from '../../../componets/Personal Information/CaterePersonalInfo';
import {useSelector} from 'react-redux';

export default function Peronal_Infomation({navigation}) {
  const role = useSelector(state => state.user.role);
  console.log('pp ' + role);
  return (
    <View style={styles.container}>
      {role === 'Customer' ? (
        <CustomerPersonalInfo navigation={navigation} />
      ) : (
        <CaterePersonalInfo navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
