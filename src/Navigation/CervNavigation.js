import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login/Login';
import Registration from '../screens/Register/Registration';
import MobileNumber from '../screens/Register/MobileNumber';
import VerifyOtp from '../screens/Register/VerifyOtp';
import ForgetPassword from '../screens/ForgetPassword';
import Role from '../screens/Role';
import HomeNavigation from './HomeNavigation';
import CatereDetails from '../componets/Caterer/CatereDetails';
import Peronal_Infomation from '../screens/Profile/Peronal_Infomation';
import Change_password from '../screens/Profile/Change_password';
import Payment_method from '../screens/Profile/Payment_method';
import MyFavorites from '../screens/Profile/MyFavorites';
import SavedAddress from '../screens/Profile/SavedAddress';
import ChatDetails from '../screens/Chat/ChatDetails';
import Notification from '../screens/Notification';
import Filter from '../screens/Filter';
import OrderDetails from '../screens/Order/OrderDetails';
import AddNewcard from '../screens/Profile/AddNewcard';
import OrderReceipt from '../screens/Order/OrderReceipt';
import DiscountCode from '../screens/DiscountCode';
import EditInfo from '../screens/Profile/EditInfo';
import AddStoreDetails from '../screens/CatereScreens/AddStoreDetails';
import Menu from '../screens/CatereScreens/Menu/Menu';
import EditCategory from '../screens/CatereScreens/Menu/EditCategory';
import CatereNavigation from './CatereNavigation';
import AddCategory from '../screens/CatereScreens/Menu/AddCategory';
import MealDetails from '../screens/CatereScreens/Menu/MealDetails';

const Stack = createNativeStackNavigator();

export default function CervNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="role"
          component={Role}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen name="CatereDetails" component={CatereDetails} />

        <Stack.Screen
          name="Register"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone Number"
          component={MobileNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp Verify"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget Password"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={CatereDetails} />

        <Stack.Screen
          name="Personal information"
          component={Peronal_Infomation}
        />

        <Stack.Screen name="Change Password" component={Change_password} />
        <Stack.Screen name="Payment Method" component={Payment_method} />
        <Stack.Screen name="My Favorites" component={MyFavorites} />
        <Stack.Screen name="Saved Address" component={SavedAddress} />

        <Stack.Screen name="Chat Details" component={ChatDetails} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Order Detials" component={OrderDetails} />
        <Stack.Screen name="Add New Card" component={AddNewcard} />
        <Stack.Screen name="Order Receipt" component={OrderReceipt} />
        <Stack.Screen name="View Discount Codes" component={DiscountCode} />
        <Stack.Screen name="Edit information" component={EditInfo} />

        {/* caterScreen Screen */}
        <Stack.Screen
          name="CatereLogin"
          component={CatereNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Add Caterer Store Details"
          component={AddStoreDetails}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Edit Category" component={EditCategory} />
        <Stack.Screen name="Add Category" component={AddCategory} />
        <Stack.Screen
          name="Meal Details"
          component={MealDetails}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
