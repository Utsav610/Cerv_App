export const UPDATE_ROLE = 'UPDATE_ROLE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SAVED_ADDRESS = 'SAVED_ADDRESS';
export const STORE_COUPON_CODE = 'STORE_COUPON_CODE';
export const SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const SET_CARD = 'SET_CARD';
export const STORE_COUPON_DATA = 'STORE_COUPON_DATA';
export const DELETE_COUPON = 'DELETE_COUPON';
export const STORE_CATERE_DATA = 'STORE_CATERE_DATA';
export const STORE_FORM_DATA = 'STORE_FORM_DATA';
export const SET_MOBILE_NUMBER = 'SET_MOBILE_NUMBER';
export const LOAD_CERV_DATA = 'LOAD_CERV_DATA';
export const UPDATE_CATEGORY_TITLE = 'UPDATE_CATEGORY_TITLE';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';

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

export const setCard = payment => {
  // console.log('role', code);
  return {
    type: SET_CARD,
    payload: payment,
  };
};

export const storeCouponData = data => {
  return {
    type: STORE_COUPON_DATA,
    payload: data,
  };
};
export const deleteCoupon = couponCode => {
  return {
    type: DELETE_COUPON,
    payload: couponCode,
  };
};

// actions.js

export const storeCatereData = data => ({
  type: STORE_CATERE_DATA,
  payload: data,
});

export const storeFormData = formData => ({
  type: STORE_FORM_DATA,
  payload: formData,
});

export const storeMobile = number => ({
  type: SET_MOBILE_NUMBER,
  payload: number,
});

export const setcervData = data => ({
  type: LOAD_CERV_DATA,
  payload: data,
});

// cervActions.js
export const updateCategoryTitle = (categoryName, newTitle) => ({
  type: UPDATE_CATEGORY_TITLE,
  payload: {categoryName, newTitle},
});

export const deleteCategory = categoryName => ({
  type: DELETE_CATEGORY,
  payload: categoryName,
});

export const addCategory = categoryData => ({
  type: ADD_CATEGORY,
  payload: categoryData,
});
