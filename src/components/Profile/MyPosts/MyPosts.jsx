import {
    updateNewPostTextActionCreator,
    addPostActionCreator,
} from "../../../redux/state";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = ({ postsData, dispatch, newPostData }) => {
    const onChangeNewPost = e => {
        dispatch(updateNewPostTextActionCreator(e.target.value));
    };

    const onAdd = () => {
        dispatch(addPostActionCreator());
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPost} value={newPostData} />
                </div>
                <button onClick={onAdd}>Add post</button>
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
