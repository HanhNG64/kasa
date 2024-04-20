import config from '../utils/config/config.jsx';
import { useState, useEffect } from 'react';

export function useFetchAllData() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = config.host;

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        // A ADAPTER AVEC LE BACK-END
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

export function useFetchData(id) {
  const [logement, setLogement] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = config.host;

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        // A ADAPTER AVEC LE BACK-END
        const response = await fetch(url);
        const data = await response.json();
        setLogement(data.find((item) => item.id === id));
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { logement, isLoading, error };
}
