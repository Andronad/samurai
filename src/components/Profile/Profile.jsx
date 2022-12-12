import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.scss";

export const Profile = ({ state, addPost, changeNewPostData }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={state.postsData}
                addPost={addPost}
                changeNewPostData={changeNewPostData}
                newPostData={state.newPostData}
            />
        </div>
    );
};
