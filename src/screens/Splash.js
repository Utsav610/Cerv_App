import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('role');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>CERV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5694E',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
});
