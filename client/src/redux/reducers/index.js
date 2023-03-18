import { combineReducers } from "redux";
import authReducer from './auth';
import uploadFileReducer from './fileUpload';
import getFilesReducer from "./getFileList";
import loadFileInfoReducer from './loadInfo'
import readFileReducer from "./readFile";
import saveJsonReducer from "./savejson";
import uploadTemplateReducer from './templateUpload'
import extractReducer from './extract'
import postgresReducer from './postgres'

const rootReducer = combineReducers({
    auth: authReducer,
    uploadFile: uploadFileReducer,
    getFiles: getFilesReducer,
    loadInfo: loadFileInfoReducer,
    readFile: readFileReducer,
    saveJson: saveJsonReducer,
    uploadTemplate: uploadTemplateReducer,
    extract: extractReducer,
    postgres: postgresReducer
});

export default rootReducer;
