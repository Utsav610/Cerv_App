import {STORE_COUPON_DATA, DELETE_COUPON} from '../action/action';

const initialState = [
  {
    title: '40% OFF',
    description: 'No',
    expiryDate: '2 days',
    active: 'active',
    couponCode: 'NEW40',
  },
];

const couponReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case STORE_COUPON_DATA:
      // state.push(action.payload);
      return [...state, action.payload];
    case DELETE_COUPON:
      const updatedCoupons = state.filter(
        coupon => coupon.couponCode !== action.payload,
      );
      return {
        ...state,
        coupons: updatedCoupons,
      };
    default:
      return state;
  }
};

export default couponReducer;
