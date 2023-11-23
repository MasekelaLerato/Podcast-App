import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./components/login.css"
import "./index.css"
// import Login from  "./components/login";
import Homepage from "./components/homepage"

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
      {/* <Route path="/*" element={<Login setUser={setUser} />} />  */}
      <Route path="/*" element={<Homepage />} />
      </Routes>
      
     </BrowserRouter>
  );
};

export default App;