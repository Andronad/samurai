const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

const initialProfileState = {
    postsData: [
        { message: "Hi, how are you?", id: 1, likesCount: 12 },
        { message: "It is my first post??", id: 2, likesCount: 13 },
    ],
    newPostData: "",
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
        default: {
            return state;
        }
    }
};