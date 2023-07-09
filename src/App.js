
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import RequireAuth from './Component/Login/RequireAuth';
import Profile from './Component/Profile/Profile';
import Uprofile from './Component/Profile/Uprofile';
import Pwork from './Component/Home/Pwork';

function App() {
  // this is last update from  09/07/2023
  const a = "hi this a "
  return (

    <>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/profile' element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
        <Route path='/pwork' element={<RequireAuth><Pwork></Pwork></RequireAuth>}></Route>
        <Route path='/uprofile' element={<RequireAuth><Uprofile></Uprofile></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>

    </>
  );
}

export default App;



