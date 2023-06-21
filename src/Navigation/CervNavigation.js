import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import MobileNumber from '../screens/MobileNumber';
import VerifyOtp from '../screens/VerifyOtp';
import ForgetPassword from '../screens/ForgetPassword';
const Stack = createNativeStackNavigator();

export default function CervNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ff9933',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Phone Number" component={MobileNumber} />
        <Stack.Screen name="Otp Verify" component={VerifyOtp} />
        <Stack.Screen name="Forget Password" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
