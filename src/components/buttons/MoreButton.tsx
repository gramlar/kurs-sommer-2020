import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { AsyncStateContext } from '../../context/AsyncStateProvider';

const MoreButton: FunctionComponent = () => {
  const { usersAsync, count, setCount } = useContext(AsyncStateContext);
  const [disable, setDisable] = useState(false);
  useEffect(() => setDisable(count >= usersAsync.data.length), [count]);

  return (
    <button disabled={disable} onClick={() => setCount(count + 1)}>
      More
    </button>
  );
};

export default MoreButton;
