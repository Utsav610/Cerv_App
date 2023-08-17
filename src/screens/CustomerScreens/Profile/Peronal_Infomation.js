import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomerPersonalInfo from '../../../components/Personal Information/CustomerPersonalInfo';
import CatererPersonalInfo from '../../../components/Personal Information/CatererPersonalInfo';
import {useSelector} from 'react-redux';

export default function Peronal_Infomation({navigation}) {
  const role = useSelector(state => state.user.role);

  return (
    <View style={styles.container}>
      {role === 'Customer' ? (
        <CustomerPersonalInfo navigation={navigation} />
      ) : (
        <CatererPersonalInfo navigation={navigation} />
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
