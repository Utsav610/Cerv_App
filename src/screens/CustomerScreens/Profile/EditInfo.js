import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EditCustomerInfo from '../../../components/EditInfomation/EditCustomerInfo';
import EditCatererInfo from '../../../components/EditInfomation/EditCatererInfo';
import {useSelector} from 'react-redux';

export default function EditInfo({navigation}) {
  const role = useSelector(state => state.user.role);
  console.log('pp ' + role);
  return (
    <View style={styles.container}>
      {role === 'Customer' ? (
        <EditCustomerInfo navigation={navigation} />
      ) : (
        <EditCatererInfo navigation={navigation} />
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
