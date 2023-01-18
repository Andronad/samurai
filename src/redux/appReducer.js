import { authMe } from "./authReducer";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInitialized: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setInitialized: (state, action) => {
            state.isInitialized = action.payload;
        },
    },
});

export const { setInitialized } = appSlice.actions;

export const initializeApp = () => dispatch => {
    dispatch(setInitialized(false));
    dispatch(authMe()).then(() => dispatch(setInitialized(true)));
};

export default appSlice.reducer;
