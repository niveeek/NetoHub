import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar.jsx";
import Subbar from "../../components/DashboardComponents/Subbar/Subbar.jsx";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent.jsx";
import CreateFolder from "../../components/CreateFolder/CreateFolder.jsx";

const DashboardPage = () => {
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = React.useState(false);
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [])

    return (
        <>
            {isCreateFolderModalOpen && (
                    <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
                )
            }
            <Navbar/>
            <Subbar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
            <HomeComponent/>
        </>
    );
};

export default DashboardPage