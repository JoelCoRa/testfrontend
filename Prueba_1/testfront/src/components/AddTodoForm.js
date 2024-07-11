import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import '../styles/Todos.css'; 

const AddTodoForm = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(userId, title, completed));
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className='cont-inputs'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agrega el título"
      />
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <span>Marca el checkbox para establecerla como finalizada</span>
      </div>
      <button type="submit">Agregar To do</button>
    </form>
  );
};

export default AddTodoForm;
