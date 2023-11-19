

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Register from "./components/register";
import "../src/components/register.css"

//This is the main app component, it contains the routes for the application and if there is a valid user
//it will set the user in the session storage and will then be used to check if the user is logged in or not and 
//keep the relevant data in the session storage
const App = () => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [user, setUser] = React.useState<any>(null);

   React.useEffect(() => {
    const userOld = sessionStorage.getItem('user');
    if(userOld){
      setUser(JSON.parse(userOld));
    }
   }, []);

   React.useEffect(()=>{
    if(user){
      sessionStorage.setItem('user', JSON.stringify(user))
    }
   }, [user])
   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Register setUser={setUser}/>} />

      </Routes>
    </BrowserRouter>
  );
};



export default App;

