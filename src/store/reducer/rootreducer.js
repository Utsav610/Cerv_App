import {combineReducers} from 'redux';
import userReducer from './reducer';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
