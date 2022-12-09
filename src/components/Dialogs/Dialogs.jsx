import styles from "./Dialogs.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={classNames(styles.dialog, styles.active)}>
                    <NavLink to={"/dialogs/1"}>Andrei</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={"/dialogs/2"}>Dmitriy</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={"/dialogs/3"}>Stas</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={"/dialogs/4"}>Dasha</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Youy</div>
            </div>
        </div>
    );
};
