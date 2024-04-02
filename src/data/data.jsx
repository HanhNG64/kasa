import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [appartments, setAppartments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAppartments(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { appartments, isLoading, error };
}
