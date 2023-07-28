/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Order from '../screens/CatereScreens/CatereOrders/Order';
import Profile from '../screens/CatereScreens/CatereProfile/Profile';
import Chat from '../screens/CatereScreens/CatereChat/Chat';
import Menu from '../screens/CatereScreens/Menu/Menu';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../Constants/Color';
import {View} from 'react-native';
import {BackHandler, Alert} from 'react-native';

const Tab = createBottomTabNavigator();

function CatereNavigation() {
  useEffect(() => {
    // Add event listener to handle back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    // Cleanup the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    // Check if the user is on the login screen
    // You need to have some logic to determine if the user is on the login screen.
    // For example, if your login screen has a specific route name, you can check it like this:

    // If the user is on the login screen, show an alert asking if they want to quit the app
    Alert.alert(
      'Quit App',
      'Are you sure you want to quit the app?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Quit', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );

    // Return true to indicate that we've handled the back press
    return true;

    // If the user is not on the login screen, let the default back button behavior happen
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Menu') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'Order') {
            iconName = 'briefcase';
            size = focused ? 25 : 20;
          } else if (route.name === 'Chat') {
            iconName = 'message-square';
            size = focused ? 25 : 20;
          } else if (route.name === 'Profile') {
            iconName = 'user';
            size = focused ? 25 : 20;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F5694E',
        inactiveTintColor: '#777777',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name={'Menu'}
        component={Menu}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Feather name={'help-circle'} size={30} color={'#686868'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Order'}
        component={Order}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Feather name={'help-circle'} size={30} color={'#686868'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Feather name={'help-circle'} size={30} color={'#686868'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CatereNavigation;
