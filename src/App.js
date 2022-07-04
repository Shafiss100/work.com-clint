
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    
    </>
  );
}

export default App;
