import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';

export default function Chat({navigation}) {
  // const handleBackPress = () => {
  //   // navigation.goBack();
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackPress);

  //   // Don't forget to remove the event listener when the component is unmounted
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   };
  // }, []);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat Details');
          }}>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image
                source={require('../../../assest/profile_Icon.png')}
                style={styles.image}
              />
              <View>
                <Text>Jonathan Morgan</Text>
                <Text>Message</Text>
              </View>
            </View>
            <Text>Time</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image
                source={require('../../../assest/profile_Icon.png')}
                style={styles.image}
              />
              <View>
                <Text>Jonathan Morgan</Text>
                <Text>Message</Text>
              </View>
            </View>
            <Text>Time</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.chatContainer}>
            <View style={styles.img_msgContainer}>
              <Image
                source={require('../../../assest/profile_Icon.png')}
                style={styles.image}
              />
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
