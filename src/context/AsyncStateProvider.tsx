import React, { createContext, FunctionComponent, useState } from 'react';
import { User, Photo, AsyncState } from '../types';
import useAsyncState from '../hooks/use-async-state';

interface ContextState {
  usersAsync: AsyncState<User>;
  photosAsync: AsyncState<Photo>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AsyncStateContext = createContext<ContextState | null>(null);

const AsyncStateProvider: FunctionComponent = ({ children }) => {
  const usersAsync = useAsyncState<User>(
    'https://jsonplaceholder.typicode.com/users'
  );

  const photosAsync = useAsyncState<Photo>(
    'https://jsonplaceholder.typicode.com/photos'
  );

  const [count, setCount] = useState(3);

  return (
    <AsyncStateContext.Provider
      value={{
        usersAsync,
        photosAsync,
        count,
        setCount,
      }}
    >
      {children}
    </AsyncStateContext.Provider>
  );
};

export default AsyncStateProvider;
