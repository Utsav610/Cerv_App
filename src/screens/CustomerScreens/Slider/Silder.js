// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Sildes from '../../data/Dummy_data';
// import SilderItem from './SilderItem';

// export default function Silder() {
//   return (
//     <View>
//       <FlatList
//         data={Sildes}
//         horizontal
//         pagingEnabled
//         snapToAlignment="center"
//         renderItem={({item}) => {
//           return (
//             <>
//               <SilderItem item={item} resizeMode="contain" />
//             </>
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

// import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
// import React, {useRef, useState} from 'react';
// import Slides from '../data';
// import SlideItem from './SlideItem';
// import Pagination from './Pagination';

import {FlatList, Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Sildes from '../../../data/Dummy_data';
import SilderItem from './silderItem';
import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0]?.index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={Sildes}
          renderItem={({item}) => <SilderItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />

        <Pagination data={Sildes} scrollX={scrollX} index={index} />
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {},
});
