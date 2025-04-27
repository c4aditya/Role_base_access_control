import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import UserPage from './dashboard/UserDashBoard';
import Admin from './dashboard/AdminDashBoard';
import "./app.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/user-dashboard" element={<UserPage/>} />
        <Route path="/admin-dashboard" element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
