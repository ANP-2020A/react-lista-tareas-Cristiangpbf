import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import * as serviceWorker from './serviceWorker';

const initialUsers = [
    {
        firstName: 'Cristian',
        lastName: 'Guamba'
    },
    {
        firstName: 'Daniela',
        lastName: 'Guamba'
    },
    {
        firstName: 'Darío',
        lastName: 'Guamba'
    }
];

ReactDOM.render(
  <React.StrictMode>
      <UserList users={initialUsers}/>
      <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();