import userImage from "../../assets/images/user.jpg";
import styles from "./Users.module.scss";
import { NavLink } from "react-router-dom";

export const User = ({ follow, unfollow, followingInProgress, user }) => {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small || userImage}
                            alt="avatar"
                            className={styles.usersPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => unfollow(user.id)}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => follow(user.id)}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    );
};
