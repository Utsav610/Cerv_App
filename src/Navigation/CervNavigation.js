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
import CatereDetails from '../components/Caterer/CatererDetails';
import Peronal_Infomation from '../screens/CustomerScreens/Profile/Peronal_Infomation';
import Change_password from '../screens/CustomerScreens/Profile/Change_password';
import Payment_method from '../screens/CustomerScreens/Profile/Payment_method';
import MyFavorites from '../screens/CustomerScreens/Profile/MyFavorites';
import SavedAddress from '../screens/CustomerScreens/Profile/SavedAddress';
import ChatDetails from '../screens/CustomerScreens/Chat/ChatDetails';
import Notification from '../screens/Notification';
import Filter from '../screens/CustomerScreens/Filter';
import OrderDetails from '../screens/CustomerScreens/Order/OrderDetails';
import AddNewcard from '../screens/CustomerScreens/Profile/AddNewcard';
import OrderReceipt from '../screens/CustomerScreens/Order/OrderReceipt';
import DiscountCode from '../screens/DiscountCode';
import EditInfo from '../screens/CustomerScreens/Profile/EditInfo';
import AddStoreDetails from '../screens/CatererScreens/AddStoreDetails';
import Menu from '../screens/CatererScreens/Menu/Menu';
import EditCategory from '../screens/CatererScreens/Menu/EditCategory';
import CatererNavigation from './CatererNavigation';
import AddCategory from '../screens/CatererScreens/Menu/AddCategory';
import MealDetails from '../screens/CatererScreens/Menu/MealDetails';
import Product from '../screens/CatererScreens/Menu/Product/Product';
import ProductDetails from '../screens/CatererScreens/Menu/Product/ProductDetails';
import EditProductDetails from '../screens/CatererScreens/Menu/Product/EditProductDetails';
import AddProduct from '../screens/CatererScreens/Menu/Product/AddProduct';
import CatererOrderDetails from '../screens/CatererScreens/CatererOrders/CatererOrderDetails';
import CatererPastOrderDetails from '../screens/CatererScreens/CatererOrders/CatererPastOrderDetails';
import Invoice from '../screens/CatererScreens/CatererOrders/Invoice';
import DiscountCodes from '../screens/CatererScreens/CatererProfile/DiscountCodes/DiscountCodes';
import CreateDiscountCode from '../screens/CatererScreens/CatererProfile/DiscountCodes/CreateDiscountCode';
import EditDiscountCodes from '../screens/CatererScreens/CatererProfile/DiscountCodes/EditDiscountCodes';

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
          name="Home Navigation"
          component={HomeNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Details" component={CatereDetails} />

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
        {/* <Stack.Screen name="Details" component={CatereDetails} /> */}

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
          component={CatererNavigation}
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
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Edit Product" component={EditProductDetails} />
        <Stack.Screen name="Add Product" component={AddProduct} />
        <Stack.Screen
          name="caterer Order Details"
          component={CatererOrderDetails}
        />
        <Stack.Screen
          name="Past Order Details"
          component={CatererPastOrderDetails}
        />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="Discount Codes" component={DiscountCodes} />
        <Stack.Screen
          name="Create Discount Codes"
          component={CreateDiscountCode}
        />
        <Stack.Screen
          name="Edit Discount Codes"
          component={EditDiscountCodes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
