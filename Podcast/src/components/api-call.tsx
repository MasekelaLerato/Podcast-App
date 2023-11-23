// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';

const ApiCall = () => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = "https://podcast-api.netlify.app/shows";

  useEffect(() => {
    // Make a GET request to the API
    fetch(URL)
      .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`Network response was not ok, status code: ${response.status}`);
        }

        // Parse the response JSON
        return response.json();
      })
      .then(data => {
        // Set the API data in the component state
        setApiData(data);
        setIsLoading(false); // Set loading to false when data is loaded
      })
      .catch(error => {
        // Handle errors during the fetch
        setError(error.message);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  return { apiData, isLoading, error };
};

export default ApiCall;
