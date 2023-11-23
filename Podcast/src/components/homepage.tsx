import React from 'react';
import ApiCall from './api-call';

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
          {/* component rendering logic using apiData */}
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default Homepage;
