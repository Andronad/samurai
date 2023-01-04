import axios from "axios";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setUserProfile } from "./../../redux/profileReducer";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ setUserProfile }) => {
    const { id } = useParams();

    const userProfile = useSelector(state => state.profilePage.userProfile);

    useEffect(() => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${
                    id ? id : 2
                }`
            )
            .then(response => setUserProfile(response.data));
    }, [id, setUserProfile]);

    if (!userProfile) return <div>Is Loading...</div>;

    return (
        <div>
            <ProfileInfo profile={userProfile} />
            <MyPostsContainer />
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { setUserProfile };

export const ProfileWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
