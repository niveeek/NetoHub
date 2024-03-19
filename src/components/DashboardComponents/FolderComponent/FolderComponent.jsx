import {useParams} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import ShowItems from "../ShowItems/ShowItems.jsx";

const FolderComponent = () => {
    const {folderId} = useParams();
    const {currentFolderData, childFolders, childFiles} = useSelector(
        (state) => ({
            currentFolderData: state.filefolders.userFolders.find(
                (folder) => folder.docId === folderId
            )?.data,
            childFolders: state.filefolders.userFolders.filter(
                (folder) => folder.data.parent === folderId
            ),
            childFiles: state.filefolders.userFiles.filter(
                (file) => file.data.parent === folderId
            ),
        }),
        shallowEqual
    );
    return (
        <div>
            {childFolders.length > 0 ? (
                <>
                    {
                        childFolders.length > 0 && (
                            <ShowItems
                                title={"Created Folders"}
                                type={"folder"}
                                items={childFolders}
                            />
                        )
                    }
                    {
                        childFiles.length > 0 && (
                            <ShowItems
                                title={"Created Files"}
                                type={"files"}
                                items={childFiles.filter((file) => file.data.url === null)}
                            />
                        )
                    }
                </>
            ) : (
                <p className={"text-center my-5"}>Empty Folder</p>
            )}
        </div>
    );
};

export default FolderComponent;
