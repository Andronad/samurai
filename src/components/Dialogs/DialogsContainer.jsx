import { connect } from "react-redux";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
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
            dispatch(sendMessageCreator());
        },
        onNewMessageChange: e => {
            const newText = e.target.value;
            dispatch(updateNewMessageTextCreator(newText));
        },
    };
};

export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);
