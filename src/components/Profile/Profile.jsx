import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.scss";

export const Profile = ({ state, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={state.postsData}
                dispatch={dispatch}
                newPostData={state.newPostData}
            />
        </div>
    );
};
