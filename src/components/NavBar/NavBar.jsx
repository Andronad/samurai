import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={classNames(styles.item, styles.active)}>
                <NavLink
                    to={"/profile"}
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : undefined
                    }
                >
                    Profile
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to={"/dialogs"}
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : undefined
                    }
                >
                    Messages
                </NavLink>
            </div>
            <div className={styles.item}>News</div>
            <div className={styles.item}>Music</div>
            <div className={styles.item}>Settings</div>
        </nav>
    );
};
