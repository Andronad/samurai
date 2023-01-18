import { profileAPI } from "./../api/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsData: [
        { message: "Hi, how are you?", id: 1, likesCount: 12 },
        { message: "It is my first post??", id: 2, likesCount: 13 },
    ],
    newPostData: "",
    userProfile: null,
    status: "",
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPost: state => {
            const newPost = {
                id: 1,
                message: state.newPostData,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostData = "";
        },
        updateNewPostText: (state, action) => {
            state.newPostData = action.payload;
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { addPost, updateNewPostText, setStatus, setUserProfile } =
    profileSlice.actions;

export const getUserProfile = id => dispatch => {
    profileAPI
        .getProfile(id)
        .then(response => dispatch(setUserProfile(response.data)));
};

export const getStatus = id => dispatch => {
    profileAPI
        .getStatus(id)
        .then(response => dispatch(setStatus(response.data)));
};

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileSlice.reducer;
