export const UPDATE_ROLE = 'UPDATE_ROLE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const updateRole = role => {
  // console.log('role' + role);
  return {
    type: UPDATE_ROLE,
    payload: role,
  };
};

export const addToCart = itemId => {
  return {
    type: 'ADD_TO_CART',
    payload: itemId,
  };
};
