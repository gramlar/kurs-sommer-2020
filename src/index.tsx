import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UsersProvider from './context/UsersProvider';

ReactDOM.render(
  <UsersProvider>
    <App />
  </UsersProvider>,
  document.getElementById('app')
);
