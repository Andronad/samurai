import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
});

const store = configureStore({ reducer });

export default store;
