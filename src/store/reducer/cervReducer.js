import {
  LOAD_CERV_DATA,
  UPDATE_CATEGORY_TITLE,
  DELETE_CATEGORY,
  ADD_CATEGORY,
  DELETE_SUBCATEGORY_ITEM,
  ADD_SUBCATEGORY,
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
    case DELETE_SUBCATEGORY_ITEM:
      updatedCervData = state.cervData.map(category => {
        if (category.name === action.payload.categoryName) {
          const updatedSubcategories = category.subcategories.map(
            subcategory => {
              if (subcategory.name === action.payload.subcategoryName) {
                const updatedItems = subcategory.items.filter(
                  item => item.name !== action.payload.itemName,
                );
                return {
                  ...subcategory,
                  items: updatedItems,
                };
              }
              return subcategory;
            },
          );

          return {
            ...category,
            subcategories: updatedSubcategories,
          };
        }
        return category;
      });

      return {
        ...state,
        cervData: updatedCervData,
      };
    case ADD_SUBCATEGORY:
      const newSubcategory = {
        name: action.payload.subcategoryName,
        items: [], // You can initialize an empty array for the new subcategory items here
      };

      updatedCervData = state.cervData.map(category => {
        if (category.name === action.payload.title) {
          return {
            ...category,
            subcategories: [...category.subcategories, newSubcategory],
          };
        }
        return category;
      });

      return {
        ...state,
        cervData: updatedCervData,
      };
    default:
      return state;
  }
};

export default cervReducer;
