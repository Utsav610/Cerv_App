const initialState = {
  role: '',
};

const userReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log('reducer' + state);
  switch (action.type) {
    case 'UPDATE_ROLE':
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
