import React, { FunctionComponent, useContext } from 'react';
import { AsyncStateContext } from '../context/AsyncStateProvider';
import MoreButton from './buttons/MoreButton';
import LessButton from './buttons/LessButton';

const ItemList: FunctionComponent = () => {
  const { usersAsync, photosAsync, count } = useContext(AsyncStateContext);

  const { data: users } = usersAsync;
  const { data: photos } = photosAsync;

  const visibleItems = users.slice(0, count);

  return (
    <div>
      <MoreButton />
      <LessButton />
      {visibleItems.map((user, it) => (
        <div key={it}>
          {user.name}
          <img src={photos[it].thumbnailUrl} width="50" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
