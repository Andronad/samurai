import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../api/api";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUserData: (state, action) => {
            const { userId, email, login } = action.payload;
            state.userId = userId;
            state.email = email;
            state.login = login;
            state.isAuth = true;
        },
        resetAuthUserData: (state, action) => {
            state.userId = null;
            state.email = null;
            state.login = null;
            state.isAuth = false;
        },
    },
});

const { setAuthUserData, resetAuthUserData } = authSlice.actions;

export const authMe = () => async dispatch => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData({ userId: id, email, login }));
    }
};

export const login =
    (email, password, rememberMe = false, successCallback, unsuccessCallback) =>
    async dispatch => {
        const response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authMe());
            successCallback();
        } else {
            unsuccessCallback();
        }
    };

export const logout = () => async dispatch => {
    const response = authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(resetAuthUserData());
    }
};

export default authSlice.reducer;
