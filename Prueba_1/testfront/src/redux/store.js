import { createStore, // createStore -> Crea el almacén Redux.
        combineReducers,// combineReducer -> Combina los reductores para manejar diferentes partes del estado.
        applyMiddleware } from 'redux'; //applyMiddleware -> Aplica el middleware thunk para manejar acciones asíncronas.
import {thunk} from 'redux-thunk';
import userReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
