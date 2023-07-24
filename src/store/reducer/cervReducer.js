import {
  LOAD_CERV_DATA,
  UPDATE_CATEGORY_TITLE,
  DELETE_CATEGORY,
  ADD_CATEGORY,
} from '../action/action';
const initialState = {
  cervData: [],
};

const cervReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CERV_DATA:
      return {
        ...state,
        cervData: action.payload,
      };
    case UPDATE_CATEGORY_TITLE:
      let updatedCervData = state.cervData.map(category => {
        if (category.name === action.payload.categoryName) {
          return {
            ...category,
            name: action.payload.newTitle,
          };
        }
        return category;
      });

      return {
        ...state,
        cervData: updatedCervData,
      };
    case DELETE_CATEGORY:
      updatedCervData = state.cervData.filter(
        category => category.name !== action.payload,
      );
      return {
        ...state,
        cervData: updatedCervData,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        cervData: [...state.cervData, action.payload],
      };
    default:
      return state;
  }
};

export default cervReducer;
