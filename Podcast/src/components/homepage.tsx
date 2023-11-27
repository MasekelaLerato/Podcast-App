
 import React from 'react';
 import ApiCall from './api-call';
 import Shows from "./shows"


 const Homepage = () => {
  const { apiData, isLoading, error } = ApiCall();

  console.log(apiData)
  

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
           <Shows/>
          </div>
        </div>
      ) : null}
</div>
   );
};

export default Homepage;
