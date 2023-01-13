import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = ({ isAuth, login, onLogout }) => {
    return (
        <header className={styles.header}>
            <img
                alt="alt"
                src="https://www.logodesign.net/images/home-page-logo-03.png"
            ></img>
            <div className={styles.loginBlock}>
                {isAuth ? (
                    <div className={styles.logElement} onClick={onLogout}>
                        Logout
                    </div>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    );
};
