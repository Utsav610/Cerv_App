import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Cater from '../../../componets/Caterer/Catere';
import Caterer_data from '../../../data/Caterer_data';

export default function MyFavorites() {
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
