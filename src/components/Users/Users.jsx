import userImage from "../../assets/images/user.jpg";
import styles from "./Users.module.scss";
import { NavLink } from "react-router-dom";

export const Users = ({
    pages,
    users,
    follow,
    unfollow,
    currentPage,
    setCurrentPage,
    isLoading,
}) => {
    if (isLoading) return <div>Is Loading...</div>;
    return (
        <div>
            <div>
                {pages.map(e => (
                    <span
                        key={e}
                        className={
                            currentPage === e
                                ? styles.selectedPage
                                : styles.page
                        }
                        onClick={() => setCurrentPage(e)}
                    >
                        {e}
                    </span>
                ))}
            </div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img
                                        src={u.photos.small || userImage}
                                        alt="avatar"
                                        className={styles.usersPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? (
                                    <button onClick={() => unfollow(u.id)}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button onClick={() => follow(u.id)}>
                                        Follow
                                    </button>
                                )}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
