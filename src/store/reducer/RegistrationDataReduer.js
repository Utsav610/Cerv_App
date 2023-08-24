// reducers/formDataReducer.js

import {STORE_FORM_DATA, SET_MOBILE_NUMBER} from '../action/action';

const initialState = {
  catererName: '',
  email: '',
  password: '',
  confirmPassword: '',
  imageUri: '',
  phoneNumber: '',
  country_code: '',
  // isChecked: false,
};

const formDataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case STORE_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_MOBILE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload.number,
        country_code: action.payload.countryCode,
      };

    default:
      return state;
  }
};

export default formDataReducer;
