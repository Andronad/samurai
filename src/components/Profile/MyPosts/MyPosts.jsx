import { useRef } from "react";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = ({
    postsData,
    addPost,
    newPostData,
    changeNewPostData,
}) => {
    const onChangeNewPost = e => {
        changeNewPostData(e.target.value);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPost} value={newPostData} />
                </div>
                <button onClick={addPost}>Add post</button>
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
