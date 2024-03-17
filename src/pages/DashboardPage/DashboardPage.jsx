import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Route, Routes, useNavigate} from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar.jsx";
import Subbar from "../../components/DashboardComponents/Subbar/Subbar.jsx";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent.jsx";
import CreateFolder from "../../components/CreateFolder/CreateFolder.jsx";
import {getFolders} from "../../redux/actionCreators/fileFoldersActionCreator.js";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent.jsx";

const DashboardPage = () => {
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = React.useState(false);
    const {isLoggedIn, isLoading, userId} = useSelector((state) => ({
        isLoggedIn: state.auth.isAuthenticated,
        isLoading: state.filefolders.isLoading,
        userId: state.auth.user.uid,
    }), shallowEqual);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, []);

    React.useEffect(() => {
        if (isLoading && userId) {
            dispatch(getFolders(userId));
        }
    }, [isLoading, userId, dispatch]);
    return (
        <>
            {isCreateFolderModalOpen && (
                <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
            )
            }
            <Navbar/>
            <Subbar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
            <Routes>
                <Route path={""} element={<HomeComponent/>}/>
                <Route path={"folder/:folderId"} element={<FolderComponent/>}/>
            </Routes>
        </>
    );
};

export default DashboardPage