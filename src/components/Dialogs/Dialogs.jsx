import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import Message from "./Message";

export const Dialogs = ({ state }) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {state.dialogsData.map(e => (
                    <DialogItem name={e.name} id={e.id} key={e.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {state.messages.map(e => (
                    <Message message={e.message} key={e.id} />
                ))}
            </div>
        </div>
    );
};
