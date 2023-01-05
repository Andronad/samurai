import { usersAPI } from "./../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialProfileState = {
    postsData: [
        { message: "Hi, how are you?", id: 1, likesCount: 12 },
        { message: "It is my first post??", id: 2, likesCount: 13 },
    ],
    newPostData: "",
    userProfile: null,
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
        default: {
            return state;
        }
    }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    payload: userProfile,
});

export const getUserProfile = (id) => (dispatch) => {
    usersAPI
        .getProfile(id ? id : 2)
        .then((response) => dispatch(setUserProfile(response.data)));
};
