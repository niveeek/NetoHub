import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar.jsx";
import Subbar from "../../components/DashboardComponents/Subbar/Subbar.jsx";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent.jsx";

const DashboardPage = () => {
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <Navbar/>
            <Subbar/>
            <HomeComponent/>
        </>
    );
};

export default DashboardPage