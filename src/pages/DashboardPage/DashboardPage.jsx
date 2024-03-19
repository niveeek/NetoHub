import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Route, Routes, useNavigate} from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar.jsx";
import Subbar from "../../components/DashboardComponents/Subbar/Subbar.jsx";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent.jsx";
import CreateFolder from "../../components/CreateFolder/CreateFolder.jsx";
import {getFiles, getFolders} from "../../redux/actionCreators/fileFoldersActionCreator.js";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent.jsx";
import CreateFile from "../../components/CreateFile/CreateFile.jsx";

const DashboardPage = () => {
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = React.useState(false);
    const [isCreateFileModalOpen, setIsCreateFileModalOpen] = React.useState(false);
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
            dispatch(getFiles(userId));
        }
    }, [isLoading, userId, dispatch]);
    return (
        <>
            {isCreateFolderModalOpen && (
                <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
            )}
            {isCreateFileModalOpen && (
                <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen}/>
            )}
            <Navbar/>
            <Subbar
                setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
                setIsCreateFileModalOpen={setIsCreateFileModalOpen}
            />
            <Routes>
                <Route path={""} element={<HomeComponent/>}/>
                <Route path={"folder/:folderId"} element={<FolderComponent/>}/>
            </Routes>
        </>
    );
};

export default DashboardPage