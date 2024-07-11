
// Función para obtener las tareas de un usuario ordenadas por ID en orden descendente.
export const fetchTodos = (userId) => async (dispatch) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  const data = await response.json();
  dispatch({ type: 'FETCH_TODOS', payload: data.sort((a, b) => b.id - a.id) });
};

// Función para agregar una nueva tarea a un usuario.
export const addTodo = (userId, title, completed) => async (dispatch) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, title, completed }),
  });
  const data = await response.json();
  dispatch({ type: 'ADD_TODO', payload: data });
};
  