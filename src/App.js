
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import RequireAuth from './Component/Login/RequireAuth';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>

    </>
  );
}

export default App;
