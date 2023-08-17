import {UPDATE_ROLE} from '../action/action';
const initialState = {
  role: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
