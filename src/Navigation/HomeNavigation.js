/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login/Login';
import Home from '../screens/Home';
import Search from '../screens/Search/Search';
import Order from '../screens/Order/Order';
import Profile from '../screens/Profile/Profile';
import Chat from '../screens/Chat/Chat';

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'Search') {
            iconName = 'searchengin';
            size = focused ? 25 : 20;
          } else if (route.name === 'Order') {
            iconName = 'briefcase';
            size = focused ? 25 : 20;
          } else if (route.name === 'Chat') {
            iconName = 'rocketchat';
            size = focused ? 25 : 20;
          } else if (route.name === 'Profile') {
            iconName = 'user';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F5694E',
        inactiveTintColor: '#777777',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen name={'Order'} component={Order} />
      <Tab.Screen name={'Chat'} component={Chat} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
