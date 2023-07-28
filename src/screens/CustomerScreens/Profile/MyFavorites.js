import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Cater from '../../../componets/Caterer/Catere';
import Caterer_data from '../../../data/Caterer_data';
import {BackHandler} from 'react-native';

export default function MyFavorites({navigation}) {
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Don't forget to remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });
  return (
    <>
      <View style={styles.Container}>
        <FlatList
          data={Caterer_data.filter(item => item.favorite)}
          renderItem={({item}) => (
            <Cater
              name={item.name}
              address={item.Address}
              price={item.price}
              favaroite={item.favorite}
            />
          )}
        />
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
