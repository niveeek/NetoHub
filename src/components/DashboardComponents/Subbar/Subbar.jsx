import "./Subbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faFileUpload, faFolderPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeFolder} from "../../../redux/actionCreators/fileFoldersActionCreator.js";

const Subbar = ({setIsCreateFolderModalOpen}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentFolder, currentFolderData, userFolders} = useSelector((state) => ({
            currentFolder: state.filefolders.currentFolder,
            currentFolderData: state.filefolders.userFolders.find(
                (folder) => folder.docId === state.filefolders.currentFolder
            ),
            userFolders: state.filefolders.userFolders,
        }
    ), shallowEqual);

    const handleNavigate = (link, id) => {
        navigate(link);
        dispatch(changeFolder(id));
    };

    return (
        <nav className={"navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5"}>
            <nav className={"ms-5"} aria-label={"breadcrumb"}>
                <ol className={"breadcrumb d-flex align-items-center"}>
                    {currentFolder !== "root" ? (
                        <>
                            <button
                                onClick={() => handleNavigate("/dashboard", "root")}
                                className={"breadcrumb-item btn btn-link text-decoration-none"}
                            >
                                Root
                            </button>
                            {currentFolderData?.data.path.map((folder, index) => (
                                <button
                                    key={index}
                                    className={"breadcrumb-item btn btn-link text-decoration-none"}
                                    onClick={() =>
                                        handleNavigate(`/dashboard/folder/${
                                                userFolders.find((fldr) => folder === fldr.docId).docId
                                            }`,
                                            userFolders.find((fldr) => folder === fldr.docId).docId
                                        )
                                    }
                                >
                                    {userFolders.find((fldr) => folder === fldr.docId).data.name}
                                </button>
                            ))}
                            <li className={"breadcrumb-item active"}>
                                {currentFolderData?.data.name}
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={"breadcrumb-item active"}>Root</li>
                        </>
                    )}
                </ol>
            </nav>
            <ul className={"navbar-nav ms-auto"}>
                <li className={"nav-item"}>
                    <button className={"btn btn-outline-dark mx-2"}>
                        <FontAwesomeIcon icon={faFileUpload}/> &nbsp;Upload File
                    </button>
                </li>
                <li className={"nav-item"}>
                    <button className={"btn btn-outline-dark mx-2"}>
                        <FontAwesomeIcon icon={faFileAlt}/> &nbsp;Create File
                    </button>
                </li>
                <li className={"nav-item"}>
                    <button className={"btn btn-outline-dark mx-2"}
                            onClick={() => setIsCreateFolderModalOpen(true)}>
                        <FontAwesomeIcon icon={faFolderPlus}/> &nbsp;Create Folder
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Subbar;