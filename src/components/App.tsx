import React, { FunctionComponent, useContext, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { AsyncStateContext } from '../context/AsyncStateProvider';
import ItemList from './ItemList';

const App: FunctionComponent = () => {
  const { usersAsync, photosAsync } = useContext(AsyncStateContext);

  useEffect(() => {
    usersAsync.fetchData();
    photosAsync.fetchData();
  }, []);

  return usersAsync.data && photosAsync.data ? (
    <ItemList />
  ) : (
    <p>Her skulle det vært en spinner, men jeg ga litt beng i styling</p>
  );
};

export default hot(App);
