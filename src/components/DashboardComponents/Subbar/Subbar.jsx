import "./Subbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faFileUpload, faFolderPlus} from "@fortawesome/free-solid-svg-icons";

const Subbar = ({setIsCreateFolderModalOpen}) => {
    return (
        <nav className={"navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5"}>
            <p className={"ms-4"}>Root</p>
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
                    <button className={"btn btn-outline-dark mx-2"} onClick={() => setIsCreateFolderModalOpen(true)}>
                        <FontAwesomeIcon icon={faFolderPlus}/> &nbsp;Create Folder
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Subbar;