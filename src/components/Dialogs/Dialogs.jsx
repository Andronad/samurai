import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import Message from "./Message";

export const Dialogs = () => {
    let dialogsData = [
        { name: "Andrei", id: 1 },
        { name: "Stas", id: 2 },
        { name: "Dasha", id: 3 },
        { name: "Dmitriy", id: 4 },
    ];

    let messages = [
        { message: "Hi", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "Youy", id: 3 },
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsData.map(e => (
                    <DialogItem name={e.name} id={e.id} key={e.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {messages.map(e => (
                    <Message message={e.message} key={e.id} />
                ))}
            </div>
        </div>
    );
};
