import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [logements, setLogements] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLogements(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { logements, isLoading, error };
}
