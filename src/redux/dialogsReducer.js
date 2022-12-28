const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

export const updateNewMessageTextCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

export const sendMessageCreator = text => ({
    type: SEND_MESSAGE,
});

const initialDialogsReducer = {
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

export const dialogsReducer = (state = initialDialogsReducer, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        case SEND_MESSAGE: {
            const newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage],
            };
        }
        default: {
            return state;
        }
    }
};
