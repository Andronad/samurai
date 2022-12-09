import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        { message: "Hi, how are you?", id: 1, likesCount: 12 },
        { message: "It is my first post??", id: 2, likesCount: 13 },
    ];
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                {postsData.map(e => (
                    <Post message={e.message} key={e.id} />
                ))}
            </div>
        </div>
    );
};
