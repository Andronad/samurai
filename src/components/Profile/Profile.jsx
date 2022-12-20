import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.scss";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = ({ state, dispatch, ...props }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer state={state} dispatch={dispatch} />
        </div>
    );
};
