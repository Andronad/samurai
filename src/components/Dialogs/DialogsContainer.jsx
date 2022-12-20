import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import Message from "./Message";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "./../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = ({ state, dispatch }) => {
    const { newMessageText } = state;

    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (e) => {
        const newText = e.target.value;
        dispatch(updateNewMessageTextCreator(newText));
    };

    return (
        <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            dialogsPage={state}
        />
    );
};
