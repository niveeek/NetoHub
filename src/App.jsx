import './App.css'
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/AuthPages/Login/Login.jsx";
import Register from "./pages/AuthPages/Register/Register.jsx";

const App = () => {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </div>
  );
};

export default App;
