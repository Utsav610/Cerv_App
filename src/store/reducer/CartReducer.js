/* eslint-disable no-fallthrough */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  STORE_COUPON_CODE,
  SET_ORDER_TYPE,
} from '../action/action';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  couponCode: '',
  orderType: '',
};

const cartReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TO_CART: {
      let tempCart = [...state.cartItems];
      // console.log('payload' + action.payload);
      const newItem = action.payload;
      // console.log('reducer' + newItem.price);
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, update the quantity
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        // console.log('update', updatedItem);

        const index = tempCart.findIndex(ci => ci.id === existingItem.id);
        tempCart[index] = updatedItem;
      } else {
        // If the item doesn't exist, add it to the cart with Quantity 1
        const newItemWithQuantity = {
          ...newItem,
          quantity: 1,
        };
        // console.log('new', newItemWithQuantity);
        tempCart.push(newItemWithQuantity);
      }

      const updatedTotalAmount =
        parseFloat(state.totalAmount) + parseFloat(newItem.price);

      return {
        ...state,
        cartItems: tempCart,
        totalAmount: updatedTotalAmount,
      };
    }
    case REMOVE_FROM_CART: {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem) {
        let tempCart = [...state.cartItems];
        let updatedTotalAmount = state.totalAmount;

        if (existingItem.quantity > 1) {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };

          const index = tempCart.findIndex(ci => ci.id === itemId);
          tempCart[index] = updatedItem;

          updatedTotalAmount -= parseFloat(existingItem.price);
        } else {
          tempCart = tempCart.filter(item => item.id !== itemId);
          updatedTotalAmount -= parseFloat(existingItem.price);
        }

        return {
          ...state,
          cartItems: tempCart,
          totalAmount: updatedTotalAmount,
        };
      }
    }
    case STORE_COUPON_CODE:
      return {
        ...state,
        couponCode: action.payload,
      };
    case SET_ORDER_TYPE:
      return {
        ...state,
        orderType: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
