import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { AsyncStateContext } from '../../context/AsyncStateProvider';

const LessButton: FunctionComponent = () => {
  const { count, setCount } = useContext(AsyncStateContext);
  const [disable, setDisable] = useState(false);
  useEffect(() => setDisable(count <= 1), [count]);

  return (
    <button disabled={disable} onClick={() => setCount(count - 1)}>
      Less
    </button>
  );
};

export default LessButton;
