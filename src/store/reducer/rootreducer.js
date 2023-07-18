import {combineReducers} from 'redux';
import userReducer from './reducer';
import cartReducer from './CartReducer';
import addressReducer from './AdressReducer';
import couponReducer from './CouponReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
  coupon: couponReducer,
});

export default rootReducer;
