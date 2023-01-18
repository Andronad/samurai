import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Loader from "../Loader";
import { getUserProfile, getStatus } from "./../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

export const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const status = useSelector(state => state.profilePage.status);
    const userProfile = useSelector(state => state.profilePage.userProfile);
    const authorizedUserId = useSelector(state => state.auth.userId);
    useEffect(() => {
        const searchedId = id ? id : authorizedUserId;
        dispatch(getUserProfile(searchedId));
        dispatch(getStatus(searchedId));
    }, [id, dispatch, authorizedUserId]);

    return (
        <>
            {userProfile ? (
                <div>
                    <ProfileInfo profile={userProfile} status={status} />
                    <MyPostsContainer />
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};
