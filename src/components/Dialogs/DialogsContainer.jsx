import { connect } from "react-redux";
import {
    sendMessage,
    updateNewMessageText,
} from "./../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessage());
        },
        onNewMessageChange: e => {
            const newText = e.target.value;
            dispatch(updateNewMessageText(newText));
        },
    };
};

export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);
