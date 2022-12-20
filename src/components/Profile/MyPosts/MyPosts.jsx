import {
    updateNewPostTextCreator,
    addPostCreator,
} from "../../../redux/profileReducer";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = ({
    addPost,
    updateNewPostText,
    postsData,
    newPostData,
}) => {
    const onChangeNewPost = (e) => {
        updateNewPostText(e.target.value);
    };

    // const onAdd = () => {
    //     addPost();
    // };

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
                {postsData.map((e) => (
                    <Post message={e.message} key={e.id} />
                ))}
            </div>
        </div>
    );
};
