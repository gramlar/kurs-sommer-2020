import React, {
  createContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';
import { User } from '../types';
import { getUsersResponse } from '../utils';

interface ContextState {
  users: User[];
}

export const UsersContext = createContext<ContextState | null>(null);

const UsersProvider: FunctionComponent = ({ children }) => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsersResponse();
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
