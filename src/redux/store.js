import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import {thunk} from "redux-thunk";

const store = createStore(
    combineReducers({authReducer}),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;