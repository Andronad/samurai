import { useEffect } from "react";
import styles from "./Users.module.scss";

export const Users = ({ users, follow, unfollow, setUsers }) => {
    useEffect(() => {
        setUsers([
            {
                id: 1,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg/274px-%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg",
                fullName: "Dmitry",
                status: "I'm a boss",
                location: {
                    country: "Belarus",
                    city: "Minsk",
                },
                followed: false,
            },
            {
                id: 2,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg/274px-%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg",
                fullName: "Sasha",
                status: "Woohoo",
                location: {
                    country: "UK",
                    city: "London",
                },
                followed: true,
            },
            {
                id: 3,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg/274px-%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg",
                fullName: "Andrei",
                status: "I'm a programmer",
                location: {
                    country: "Belarus",
                    city: "Minsk",
                },
                followed: false,
            },
            {
                id: 4,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg/274px-%D0%91%D1%80%D0%B5%D0%BA%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_.jpg",
                fullName: "Nikita",
                status: "I'm a boss",
                location: {
                    country: "Sweden",
                    city: "Vasteres",
                },
                followed: false,
            },
        ]);
    }, []);

    return (
        <div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={u.photoUrl}
                                    alt="avatar"
                                    className={styles.usersPhoto}
                                />
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
