import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import About from "./components/About";
import "./App.css";

function App() {
  const [status, setStatus] = useState(false);
  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = () => {
    setStatus(false);
  };

  return (
    <div>
      <Routes>
      <Route path="/main"  element={<Main />} />
        <Route path="/about"  element={<About />} />
        <Route path="/" element={<Login  auth={authenticate}/>} />
        <Route
          path="/main"
          element={<Main logout={logout} status={status} />}
        />
      </Routes>
    </div>
  );
}

export default App;
