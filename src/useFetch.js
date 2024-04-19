import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(response => {
          console.info(response);
          if (!response.ok) {
            // error coming back from server
            throw Error('Nu am putut obtine datele');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.info('fetch aborted!');
          } else {
            // auto catches network / connection error
            setError(err.message);
            console.error(err.message);
            setIsLoading(false);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
