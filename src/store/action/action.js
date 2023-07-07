export const UPDATE_ROLE = 'UPDATE_ROLE';
export const updateRole = role => {
  // console.log('role' + role);
  return {
    type: UPDATE_ROLE,
    payload: role,
  };
};
