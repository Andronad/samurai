import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState,
    reducers: {
        updateNewMessageText: (state, action) => {
            state.newMessageText = action.payload;
        },
        sendMessage: state => {
            state.messages.push({ id: 6, message: state.newMessageText });
            state.newMessageText = "";
        },
    },
});

export const { sendMessage, updateNewMessageText } = dialogsSlice.actions;

export default dialogsSlice.reducer;
