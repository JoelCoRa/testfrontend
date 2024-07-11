
const initialState = {
  todos: [],
};

// Reductor para manejar el estado de las tareas.
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [action.payload, ...state.todos] };
    default:
      return state;
  }
};
  
export default todoReducer;
  