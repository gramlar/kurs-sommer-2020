import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AsyncStateProvider from './context/AsyncStateProvider';

ReactDOM.render(
  <AsyncStateProvider>
    <App />
  </AsyncStateProvider>,
  document.getElementById('app')
);
