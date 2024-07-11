
const initialState = {
  users: [],
};
  
// Reductor para manejar el estado de los usuarios.
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
  
export default userReducer;
  