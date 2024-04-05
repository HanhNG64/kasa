import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAppartments(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return { appartments };
}

export function useFetchAppartment(url, appartmentId) {
  const [appartment, setAppartment] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAppartment(data);
        const appartment = data.find((app) => app.id === appartmentId);
        setAppartment(appartment);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { appartment, isLoading, error };
}

// export function useFetch(url) {
//   const [appartments, setAppartments] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!url) return;
//     setLoading(true);
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setAppartments(data);
//       } catch (err) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return { appartments, isLoading, error };
// }
