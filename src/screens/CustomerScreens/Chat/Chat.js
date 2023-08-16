import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../../constants/Images';

export default function Chat({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat Details');
          }}>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image source={Images.PROFILE} style={styles.image} />
              <View>
                <Text>Jonathan Morgan</Text>
                <Text>Message</Text>
              </View>
            </View>
            <Text>Time</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat Details');
          }}>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image source={Images.PROFILE} style={styles.image} />
              <View>
                <Text>Jonathan Morgan</Text>
                <Text>Message</Text>
              </View>
            </View>
            <Text>Time</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat Details');
          }}>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image source={Images.PROFILE} style={styles.image} />
              <View>
                <Text>Jonathan Morgan</Text>
                <Text>Message</Text>
              </View>
            </View>
            <Text>Time</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  chatContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img_msgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
