/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
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

const Tab = createBottomTabNavigator();

function CatereNavigation() {
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
