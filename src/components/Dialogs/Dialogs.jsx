import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import Message from "./Message";

export const Dialogs = ({
    onSendMessageClick,
    onNewMessageChange,
    dialogsPage: { newMessageText, dialogsData, messages },
}) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsData.map((e) => (
                    <DialogItem name={e.name} id={e.id} key={e.id} />
                ))}
            </div>
            <div className={styles.messages}>
                <div>
                    {messages.map((e) => (
                        <Message message={e.message} key={e.id} />
                    ))}
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder="Enter message"
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
