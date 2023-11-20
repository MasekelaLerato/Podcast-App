// App.tsx

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import Register from "./components/register";
import "./components/register.css"
import "./index.css"

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
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
        <Route path="/homepage" element={<Homepage setUser={setUser} />} />
        <Route path="/*" element={<Register setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;






