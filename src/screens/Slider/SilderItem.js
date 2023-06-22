import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

export default function SilderItem({item}) {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 170,
  },
});
