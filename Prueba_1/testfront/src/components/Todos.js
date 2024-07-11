import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/todoActions';
import AddTodoForm from './AddTodoForm';
import '../styles/Todos.css';

const Todos = ({ userId }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos(userId));
  }, [dispatch, userId]);

  return (
    <div className="todos">
      <h2>To do's</h2>
      <AddTodoForm userId={userId} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Finished' : 'Not finished'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
