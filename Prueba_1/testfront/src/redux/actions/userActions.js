
// Función para obtener los usuarios desde la API.
export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  dispatch({ type: 'FETCH_USERS', payload: data });
};
