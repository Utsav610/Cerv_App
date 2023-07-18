// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Modal,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Color from '../../../../Constants/Color';
// import DeleteModal from '../../../../componets/DeleteModal';
// import Menu_data from '../../../../data/Menu_data';

// export default function Product({navigation, route}) {
//   const {title} = route.params;
//   console.log(title);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedMenu, setSelectedMenu] = useState('Noodles');

//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const filteredCategories = Menu_data.filter(
//       item => item.type === selectedMenu,
//     );
//     setFilteredData(filteredCategories);
//   }, [selectedMenu]);

//   const handleDelete = () => {
//     // Perform delete operation

//     setModalVisible(false);
//   };

//   const renderItem = ({item}) => {
//     return (
//       <>
//         <View style={styles.itemContainer}>
//           <View style={styles.itemImageContainer}>
//             <Image
//               source={require('../../../../assest/silder1.jpeg')}
//               style={styles.itemImage}
//             />
//           </View>
//           <View style={styles.itemDetailsContainer}>
//             <View style={styles.direction}>
//               <Text style={styles.itemName}>{item.type}</Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   setModalVisible(true);
//                 }}>
//                 <FontAwesome5 name={'trash'} size={15} />
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('Product Details');
//               }}>
//               <Text style={styles.itemDescription}>
//                 Delicious fried rice with chicken, vegetables, and special
//                 spices.
//               </Text>
//               <View>
//                 <Text style={styles.itemPrice}>{item.price}</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <View style={styles.direction}>
//           <Text>Subcategory</Text>
//           <Text style={styles.text}>ADD</Text>
//         </View>
//         <View style={styles.menuContainer}>
//           <TouchableOpacity onPress={() => setSelectedMenu('Noodles')}>
//             <Text
//               style={[
//                 styles.label,
//                 selectedMenu === 'Noodles' && styles.selectedLabel,
//               ]}>
//               Veg
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setSelectedMenu('Rice')}>
//             <Text
//               style={[
//                 styles.label,
//                 selectedMenu === 'Rice' && styles.selectedLabel,
//               ]}>
//               Non-Veg
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setSelectedMenu('Szechwan')}>
//             <Text
//               style={[
//                 styles.label,
//                 selectedMenu === 'Szechwan' && styles.selectedLabel,
//               ]}>
//               Chinese
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setSelectedMenu('Chow Main')}>
//             <Text
//               style={[
//                 styles.label,
//                 selectedMenu === 'Chow Main' && styles.selectedLabel,
//               ]}>
//               BBQ
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.direction}>
//         <Text>Items</Text>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Add Product');
//           }}>
//           <Text style={styles.text}>ADD</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         keyExtractor={item => item.id.toString()}
//         data={filteredData}
//         renderItem={renderItem}
//         numColumns={1}
//       />

//       <Modal
//         visible={modalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <DeleteModal
//             itemTitle="Noodle"
//             onCancel={() => setModalVisible(false)}
//             onDelete={handleDelete}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   label: {
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 7,
//     paddingVertical: 2,
//     marginHorizontal: 5,
//     marginVertical: 10,
//   },
//   menuContainer: {
//     flexDirection: 'row',
//   },
//   direction: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemDetailsContainer: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   itemDescription: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },

//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,

//     paddingVertical: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccc',
//   },
//   itemImageContainer: {
//     marginRight: 10,
//   },
//   itemImage: {
//     width: 80,
//     height: 90,
//     resizeMode: 'cover',
//     borderRadius: 5,
//   },
//   text: {
//     color: Color.primaryColor,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedLabel: {
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: Color.primaryColor,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../../Constants/Color';
import DeleteModal from '../../../../componets/DeleteModal';
import Menu_data from '../../../../data/Menu_data';
import Cerv_Data from '../../../../data/Cerv_Data';
import Feather from 'react-native-vector-icons/Feather';

export default function Product({navigation, route}) {
  const {subcategory} = route.params;
  const {title} = route.params;

  console.log(subcategory);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(subcategory);

  const [filteredData, setFilteredData] = useState([]);
  const [subtitle, setsubtitle] = useState('Noodle');

  useEffect(() => {
    const category = Cerv_Data.find(item => item.name === title);
    if (category) {
      const subcategory = category.subcategories.find(
        sub => sub.name === selectedMenu,
      );
      if (subcategory) {
        setFilteredData(subcategory.items);
      } else {
        setFilteredData([]);
      }
    } else {
      setFilteredData([]);
    }
  }, [selectedMenu, title]);

  const handleDelete = () => {
    setModalVisible(false);
  };

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image
              source={require('../../../../assest/silder1.jpeg')}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.itemDetailsContainer}>
            <View style={styles.direction}>
              <Text style={styles.itemName}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setsubtitle(item.name);
                }}>
                <Feather name={'trash-2'} size={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product Details');
              }}>
              <Text style={styles.itemDescription}>
                Delicious fried rice with chicken...
              </Text>
              <View>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.direction}>
          <Text>Subcategory</Text>
          <Text style={styles.text}>ADD</Text>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => setSelectedMenu('Veg')}>
            <Text
              style={[
                styles.label,
                selectedMenu === 'Veg' && styles.selectedLabel,
              ]}>
              Veg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedMenu('Non-Veg')}>
            <Text
              style={[
                styles.label,
                selectedMenu === 'Non-Veg' && styles.selectedLabel,
              ]}>
              Non-Veg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedMenu('Chinese')}>
            <Text
              style={[
                styles.label,
                selectedMenu === 'Chinese' && styles.selectedLabel,
              ]}>
              Chinese
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedMenu('BBQ')}>
            <Text
              style={[
                styles.label,
                selectedMenu === 'BBQ' && styles.selectedLabel,
              ]}>
              BBQ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.direction}>
        <Text>Items</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add Product');
          }}>
          <Text style={styles.text}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        // keyExtractor={item => item.id}
        data={filteredData}
        renderItem={renderItem}
        numColumns={1}
      />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <DeleteModal
            itemTitle={subtitle}
            onCancel={() => setModalVisible(false)}
            onDelete={handleDelete}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    borderWidth: 1,
    borderColor: Color.accentColor,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: 'row',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDetailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,

    // paddingVertical: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  itemImageContainer: {
    marginRight: 10,
  },
  itemImage: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  text: {
    color: Color.primaryColor,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedLabel: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: Color.primaryColor,
  },
});
