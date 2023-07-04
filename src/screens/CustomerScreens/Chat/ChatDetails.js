import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
export default function ChatDetails() {
  const role = useSelector(state => state.user.role);
  console.log(role);
  return (
    <View>
      <Text>ChatDetails a</Text>
      <Text>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
