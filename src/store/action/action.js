export const UPDATE_ROLE = 'UPDATE_ROLE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SAVED_ADDRESS = 'SAVED_ADDRESS';
export const STORE_COUPON_CODE = 'STORE_COUPON_CODE';
export const SET_ORDER_TYPE = 'SET_ORDER_TYPE';

export const updateRole = role => {
  // console.log('role' + role);
  return {
    type: UPDATE_ROLE,
    payload: role,
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = itemId => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const updateAddress = address => {
  // console.log('role', address);
  return {
    type: SAVED_ADDRESS,
    payload: address,
  };
};

export const storeCouponCode = code => {
  // console.log('role', code);
  return {
    type: STORE_COUPON_CODE,
    payload: code,
  };
};

export const setOrderType = type => {
  // console.log('role', code);
  return {
    type: SET_ORDER_TYPE,
    payload: type,
  };
};
