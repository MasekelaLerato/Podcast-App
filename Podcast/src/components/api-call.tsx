
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';

const ApiCall = () => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = "https://podcast-api.netlify.app/shows";

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return { apiData, isLoading, error };
};

export default ApiCall;
