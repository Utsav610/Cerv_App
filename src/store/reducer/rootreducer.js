import {combineReducers} from 'redux';
import userReducer from './reducer';
import cartReducer from './CartReducer';
import addressReducer from './AdressReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
});

export default rootReducer;
