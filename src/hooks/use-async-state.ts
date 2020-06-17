import { useState } from 'react';
import { getAPIResponse } from '../utils';

const useAsyncState = <T>(url: string) => {
  const [data, setData] = useState<T[]>();

  const fetchData = async () => {
    const response = await getAPIResponse<T>(url);
    setData(response);
  };

  return {
    data,
    fetchData,
  };
};

export default useAsyncState;
