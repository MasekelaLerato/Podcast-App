// App.tsx

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import Register from "./components/register";

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [user, setUser] = React.useState<any>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;






