import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (!signal.aborted) {
          setData(json);
        }
      } catch (error) {
        if (!signal.aborted) {
          console.log(error);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [url]);
  return [data, loading, error];
};
export default useFetch;
