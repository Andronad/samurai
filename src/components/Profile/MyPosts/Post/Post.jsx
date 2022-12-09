import styles from "./Post.module.scss";

export const Post = ({ message }) => {
    return (
        <div className={styles.item}>
            <img
                alt="here"
                src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            />
            {message}
            <div>
                <span> like</span>
            </div>
        </div>
    );
};
