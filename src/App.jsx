import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage, Login, Register, DashboardPage} from "./pages/index.js";

const App = () => {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
      </div>
  );
};

export default App;
