import * as types from "../actionsTypes/fileFoldersActionTypes.js"
import fire from "../../config/firebase.js";

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

export const createFolder = (data) => (dispatch) => {
    // console.log(data);
    fire
        .firestore()
        .collection("folders")
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();
            dispatch(addFolder(folderData));
            alert("Folder Created Successfully");
        });
};
