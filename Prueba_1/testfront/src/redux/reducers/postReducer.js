
const initialState = {
  posts: [],
};

// Reductor para manejar el estado de los usuarios.  
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
  
export default postReducer;
  