import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.scss";

export const DialogItem = ({ id, name }) => {
    return (
        <div className={styles.item}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};
