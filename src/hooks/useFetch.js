/* eslint-disable no-catch-shadow */
import axios from 'axios';
import {useState} from 'react';

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetch(url, options) {
    setLoading(true);
    try {
      const {data: serverData} = await axios.get(url, options);
      setData(serverData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return {data, error, loading, fetch};
}

export {useFetch};
