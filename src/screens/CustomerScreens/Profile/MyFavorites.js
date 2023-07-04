import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cater from '../../../componets/Caterer/Catere';

export default function MyFavorites() {
  return (
    <>
      <View style={styles.Container}>
        <Cater />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
  },
});
