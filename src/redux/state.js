const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

const store = {
    _state: {
        profilePage: {
            postsData: [
                { message: "Hi, how are you?", id: 1, likesCount: 12 },
                { message: "It is my first post??", id: 2, likesCount: 13 },
            ],
            newPostData: "",
        },
        dialogsPage: {
            dialogsData: [
                { name: "Andrei", id: 1 },
                { name: "Stas", id: 2 },
                { name: "Dasha", id: 3 },
                { name: "Dmitriy", id: 4 },
            ],
            messages: [
                { message: "Hi", id: 1 },
                { message: "How are you?", id: 2 },
                { message: "Youy", id: 3 },
            ],
        },
    },
    _callSubscriber() {
        console.log("state has been changed");
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 1,
                message: this._state.profilePage.newPostData,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostData = "";
            this._callSubscriber(this._state);
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostData = action.newText;
            this._callSubscriber(this._state);
        }
    },

    subsribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
};

export default store;
