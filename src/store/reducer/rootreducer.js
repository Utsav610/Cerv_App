import {combineReducers} from 'redux';
import userReducer from './reducer';
import cartReducer from './CartReducer';
import addressReducer from './AdressReducer';
import couponReducer from './CouponReducer';
import CatereInfoReducer from './CatereInfoReducer';
import formDataReducer from './RegistrationDataReduer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
  coupon: couponReducer,
  catereData: CatereInfoReducer,
  RegisterData: formDataReducer,
});

export default rootReducer;
