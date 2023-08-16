import {SAVED_ADDRESS} from '../action/action';

const initialState = {
  Adress: '374 William S Canning Blvd',
};

const addressReducer = (state = initialState, action) => {
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
