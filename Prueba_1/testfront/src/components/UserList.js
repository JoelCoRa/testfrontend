import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';

const UserList = ({ onSelectUser }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 className='titulo'>Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
