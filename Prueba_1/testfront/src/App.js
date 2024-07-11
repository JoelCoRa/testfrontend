import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import Todos from './components/Todos';
import './styles/index.css'

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [view, setView] = useState(null);

  return (
    <Provider store={store}>
      <div className="app">
        <div className="lista">
          <UserList onSelectUser={setSelectedUser} />
        </div>
        <div className="content">
          <UserDetails
            user={selectedUser}
            onShowPosts={() => setView('posts')}
            onShowTodos={() => setView('todos')}
          />
          {view === 'posts' && <Posts userId={selectedUser?.id} />}
          {view === 'todos' && <Todos userId={selectedUser?.id} />}
        </div>
      </div>
    </Provider>
  );
};

export default App;
