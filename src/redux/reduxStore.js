import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

const reducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
});

const store = configureStore({ reducer });

export default store;
