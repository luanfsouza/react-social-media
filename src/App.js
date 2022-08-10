import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messanger/Messenger";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {/* tirar !  trocar o primeiro login por register*/}
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate replace to="/" /> : <Messenger/>}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
