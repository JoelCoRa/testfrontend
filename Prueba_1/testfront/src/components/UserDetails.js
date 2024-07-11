import React from 'react';
import '../styles/UserDetails.css'; 

const UserDetails = ({ user, onShowPosts, onShowTodos }) => {
  if (!user) return <div className="user-details"><h2>Selecciona un usuario</h2></div>;

  return (
    <div className="cont-detalles">
      <h2>Detalles</h2>
      <p>Name: <span>{user.name}</span></p>
      <p>Username: <span> {user.username}</span></p>
      <p>Email: <span>{user.email}</span></p>
      <p>City: <span> {user.address.city}</span></p>
      <p>Phone: <span> {user.phone}</span></p>
      <p>Website: <span> {user.website}</span></p>
      <p>Company: <span> {user.company.name}</span></p>
      <div className='cont-btn'>
        <button className="btn" onClick={onShowPosts}>Mostrar Posts del usuario {user.name}</button>
        <button className="btn" onClick={onShowTodos}>Mostrar To do's del usuario {user.name}</button>
      </div>
    </div>
  );
};

export default UserDetails;
