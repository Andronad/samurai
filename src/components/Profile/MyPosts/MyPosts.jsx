import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post message={"Hi, how are you?"} />
                <Post message={"It is my first post?"} />
            </div>
        </div>
    );
};
