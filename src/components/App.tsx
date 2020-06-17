import React, { FunctionComponent, useContext } from 'react';
import { UsersContext } from '../context/UsersProvider';

const App: FunctionComponent = () => {
  const { users } = useContext(UsersContext);

  return users ? (
    <div>
      {users.map((user, it) => (
        <div key={it}>{user.name}</div>
      ))}
    </div>
  ) : (
    <p>Ting tar assa laster</p>
  );
};

export default App;
