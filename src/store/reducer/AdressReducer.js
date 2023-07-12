import {SAVED_ADDRESS} from '../action/action';

const initialState = {
  Adress: '374 William S Canning Blvd',
};

const addressReducer = (state = initialState, action) => {
  // console.log(action.type);
  // console.log('reducer', action.payload);
  switch (action.type) {
    case SAVED_ADDRESS:
      return {
        ...state,
        Adress: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
