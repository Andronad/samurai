import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

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
            newMessageText: "",
        },
    },
    _callSubscriber() {
        console.log("state has been changed");
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._callSubscriber(this._state);
    },

    subsribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
};

export default store;
