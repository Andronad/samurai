import { profileAPI } from "./../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialProfileState = {
    postsData: [
        { message: "Hi, how are you?", id: 1, likesCount: 12 },
        { message: "It is my first post??", id: 2, likesCount: 13 },
    ],
    newPostData: "",
    userProfile: null,
    status: "",
};

export const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 1,
                message: state.newPostData,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostData: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostData: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.payload,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = userProfile => ({
    type: SET_USER_PROFILE,
    payload: userProfile,
});

export const setStatus = status => ({
    type: SET_STATUS,
    payload: status,
});

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
