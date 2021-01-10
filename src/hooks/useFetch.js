import axios from 'axios';
import {useState, useEffect} from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const {data: serverData} = await axios.get(url).catch((serverError) => {
      setLoading(false);
      setError(serverError);
    });
    setLoading(false);
    setData(serverData);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, error};
}
