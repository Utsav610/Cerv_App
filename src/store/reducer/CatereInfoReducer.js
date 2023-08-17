import {STORE_CATERE_DATA} from '../action/action';

const initialState = {
  businessInfo: {
    licenseNumber: '',
    licensePhoto: '',
    address: '',
    bio: '',
  },
  orderType: '',
  deliveryFee: '',
  selectedKm: '',
  selectedFoodCategories: [],
  driverInfo: {
    drivername: '',
    driverLicenseNum: '',
  },
};

const allDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CATERE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default allDataReducer;
