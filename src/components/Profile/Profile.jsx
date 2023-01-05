import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserProfile } from "./../../redux/profileReducer";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

export const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const userProfile = useSelector((state) => state.profilePage.userProfile);

    useEffect(() => {
        dispatch(getUserProfile(id));
    }, [id, dispatch]);

    if (!userProfile) return <div>Is Loading...</div>;

    return (
        <div>
            <ProfileInfo profile={userProfile} />
            <MyPostsContainer />
        </div>
    );
};
