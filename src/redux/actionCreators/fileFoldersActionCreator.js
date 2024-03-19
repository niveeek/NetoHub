import * as types from "../actionsTypes/fileFoldersActionTypes.js"
import fire from "../../config/firebase.js";

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});
const addFolders = (payload) => ({
    type: types.ADD_FOLDERS,
    payload,
});
const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload,
});

const setChangeFolder = (payload) => ({
    type: types.CHANGE_FOLDER,
    payload,
});

const addFiles = (payload) => ({
    type: types.ADD_FILES,
    payload,
});

const addFile = (payload) => ({
    type: types.CREATE_FILE,
    payload,
});

export const createFolder = (data) => (dispatch) => {
    fire
        .firestore()
        .collection("folders")
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();
            const folderId = folder.id;
            dispatch(addFolder({data: folderData, docId: folderId}));
            alert("Folder Created Successfully");
        });
};

export const getFolders = (userId) => (dispatch) => {
    dispatch(setLoading(true));
    fire
        .firestore()
        .collection("folders")
        .where("userId", "==", userId)
        .get()
        .then(async (folders) => {
            const foldersdata = await folders.docs.map((folder) => ({
                data: folder.data(),
                docId: folder.id,
            }));
            dispatch(setLoading(false));
            dispatch(addFolders(foldersdata));
        });
};

export const changeFolder = (folderId) => (dispatch) => {
    dispatch(setChangeFolder(folderId));
};

export const getFiles = (userId) => (dispatch) => {
    fire
        .firestore()
        .collection("files")
        .where("userId", "==", userId)
        .get()
        .then(async (files) => {
            const filesdata = await files.docs.map((file) => ({
                data: file.data(),
                docId: file.id,
            }));
            dispatch(addFiles(filesdata));
        });
};

export const createFile = (data, setSuccess) => (dispatch) => {
    fire
        .firestore()
        .collection("files")
        .add(data)
        .then(async (file) => {
            const fileData = await (await file.get()).data();
            const fileId = file.id;
            dispatch(addFile({data: fileData, docId: fileId}));
            alert("File Created Successfully");
            setSuccess(true);
        });
};
