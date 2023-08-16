/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Order from '../screens/CatererScreens/CatererOrders/Order';
import Profile from '../screens/CatererScreens/CatererProfile/Profile';
import Chat from '../screens/CatererScreens/CatererChat/Chat';
import Menu from '../screens/CatererScreens/Menu/Menu';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../constants/Color';
import {View} from 'react-native';
import {BackHandler, Alert} from 'react-native';

const Tab = createBottomTabNavigator();

function CatererNavigation() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    Alert.alert(
      'Quit App',
      'Are you sure you want to quit the app?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Quit', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );

    return true;
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

export default CatererNavigation;
