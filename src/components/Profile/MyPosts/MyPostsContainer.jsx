import { MyPosts } from "./MyPosts";
import {
    updateNewPostTextCreator,
    addPostCreator,
} from "../../../redux/profileReducer";

export const MyPostsContainer = ({ state, dispatch }) => {
    const onChangeNewPost = (text) => {
        dispatch(updateNewPostTextCreator(text));
    };

    const onAdd = () => {
        dispatch(addPostCreator());
    };

    return (
        <MyPosts
            updateNewPostText={onChangeNewPost}
            addPost={onAdd}
            postsData={state.postsData}
            newPostData={state.newPostData}
        />
    );
};
