// reducers/formDataReducer.js

import {STORE_FORM_DATA, SET_MOBILE_NUMBER} from '../action/action';

const initialState = {
  catererName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  country_code: '+91',
  // isChecked: false,
  // Add other form data fields as needed
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_FORM_DATA:
      return {
        ...state,
        ...action.payload, // Merge the payload with the existing state
      };

    case SET_MOBILE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };

    default:
      return state;
  }
};

export default formDataReducer;
