import React from "react";
import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage, Login, Register, DashboardPage} from "./pages/index.js";
import {useDispatch} from "react-redux";
import {checkIsLoggedIn} from "./redux/actionCreators/authActionCreator.js";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() =>{
        dispatch(checkIsLoggedIn());
    }, []);

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
