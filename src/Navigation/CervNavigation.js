/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login/Login';
import Registration from '../screens/Register/Registration';
import MobileNumber from '../screens/Register/mobileNumber';
import VerifyOtp from '../screens/Register/verifyOtp';
import ForgetPassword from '../screens/forgetPassword';
import Role from '../screens/Role';
import HomeNavigation from './homeNavigation';
import CatereDetails from '../components/Caterer/catererDetails';
import Peronal_Infomation from '../screens/CustomerScreens/Profile/peronalInfomation';
import Change_password from '../screens/CustomerScreens/Profile/change_password';
import Payment_method from '../screens/CustomerScreens/Profile/paymentMethod';
import MyFavorites from '../screens/CustomerScreens/Profile/myFavorites';
import SavedAddress from '../screens/CustomerScreens/Profile/savedAddress';
import ChatDetails from '../screens/CustomerScreens/Chat/ChatDetails';
import Notification from '../screens/Notification';
import Filter from '../screens/CustomerScreens/Filter';
import OrderDetails from '../screens/CustomerScreens/Order/orderDetails';
import AddNewcard from '../screens/CustomerScreens/Profile/addNewcard';
import OrderReceipt from '../screens/CustomerScreens/Order/orderReceipt';
import DiscountCode from '../screens/discountCode';
import EditInfo from '../screens/CustomerScreens/Profile/editInfo';
import AddStoreDetails from '../screens/CatererScreens/addStoreDetails';
import Menu from '../screens/CatererScreens/Menu/Menu';
import EditCategory from '../screens/CatererScreens/Menu/editCategory';
import CatererNavigation from './catererNavigation';
import AddCategory from '../screens/CatererScreens/Menu/addCategory';
import MealDetails from '../screens/CatererScreens/Menu/mealDetails';
import Product from '../screens/CatererScreens/Menu/Product/Product';
import ProductDetails from '../screens/CatererScreens/Menu/Product/productDetails';
import EditProductDetails from '../screens/CatererScreens/Menu/Product/editProductDetails';
import AddProduct from '../screens/CatererScreens/Menu/Product/addProduct';
import CatererOrderDetails from '../screens/CatererScreens/CatererOrders/catererOrderDetails';
import CatererPastOrderDetails from '../screens/CatererScreens/CatererOrders/catererPastOrderDetails';
import Invoice from '../screens/CatererScreens/CatererOrders/Invoice';
import DiscountCodes from '../screens/CatererScreens/CatererProfile/DiscountCodes/discountCodes';
import CreateDiscountCode from '../screens/CatererScreens/CatererProfile/DiscountCodes/createDiscountCode';
import EditDiscountCodes from '../screens/CatererScreens/CatererProfile/DiscountCodes/editDiscountCodes';
import AddAddress from '../screens/CustomerScreens/Profile/addAddress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Stack.Screen
          name="Saved Address"
          component={SavedAddress}
          options={({navigation}) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <Icon
                name="plus"
                size={24}
                color="black"
                style={{marginRight: 15}}
                onPress={() => {
                  navigation.navigate('Add Address');
                }}
              />
            ),
          })}
        />
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

        <Stack.Screen name="Add Address" component={AddAddress} />

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

// {
//   defaultNavigationOptions: ({ navigation }) => ({
//     title: navigation.state.routeName === 'Profile' ?
//       (navigation.state.params?.editable ? 'Edit Info' : 'Profile') : '',
//   }),
