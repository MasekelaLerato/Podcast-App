// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Homepage = () => {
   
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        setLoading(true);
          const response = await fetch('https://podcast-api.netlify.app/shows');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setShows(data);
        } catch (error) {
          console.error('Error fetching data:');
        }
        const existingUser = sessionStorage.getItem("user");
        if (existingUser) {
            setUser(JSON.parse(existingUser));
          },
            } catch (error) {
              alert(error);
            } finally {
              setTimeout(() => {
                //Fake loading time as the api call is very fast
                setLoading(false);
              }, 1000);
            }


      };
  
      fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once
  
    return
     
   
  };
  
  export default Homepage;

function setLoading(arg0: boolean) {
    throw new Error('Function not implemented.');
}
function setUser(arg0: any) {
    throw new Error('Function not implemented.');
}

function fetchData() {
    throw new Error('Function not implemented.');
}

