
import React from 'react';
import ApiCall from './api-call';
import Shows from "./shows"
import Carosule from "./carousel"

const Homepage = () => {
  const { apiData, isLoading, error } = ApiCall();

  
  








  
  
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : apiData ? (
        <div>
          <h1>Podcasts</h1>
          <div>
            {/* Render your API data as needed */}
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Homepage;
