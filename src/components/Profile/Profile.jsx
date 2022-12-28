import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.scss";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};
