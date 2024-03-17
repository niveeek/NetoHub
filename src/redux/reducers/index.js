import {combineReducers} from "redux";
import authReducer from "./authReducer.js";
import fileFoldersReducer from "./fileFolderReducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    filefolders: fileFoldersReducer,
});

export default rootReducer;