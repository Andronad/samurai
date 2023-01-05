import axios from "axios";
import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage,
    unfollow,
    setLoading,
    setFollowing,
} from "./../../redux/usersReducer";
import Users from "./index";
import { usersAPI } from "./../../api/api";

const UsersContainer = ({
    users,
    follow,
    unfollow,
    setUsers,
    pageSize,
    totalCount,
    currentPage,
    setCurrentPage,
    isLoading,
    setLoading,
    setFollowing,
    followingInProgress,
}) => {
    useEffect(() => {
        setLoading(true);
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            setUsers(data.items);
            setLoading(false);
        });
    }, [setUsers, currentPage, pageSize, setLoading]);

    let pagesCount = useMemo(
        () => Math.ceil(totalCount / pageSize),
        [totalCount, pageSize]
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const followUser = (id) => {
        setFollowing(true, id);
        axios
            .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {},
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                if (response.data.resultCode === 0) {
                    follow(id);
                }
                setFollowing(false, id);
            });
    };
    const unfollowUser = (id) => {
        setFollowing(true, id);
        axios
            .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                if (response.data.resultCode === 0) {
                    unfollow(id);
                }
                setFollowing(false, id);
            });
    };

    return (
        <Users
            pages={pages}
            users={users}
            follow={followUser}
            unfollow={unfollowUser}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
            followingInProgress={followingInProgress}
        />
    );
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
});

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setLoading,
    setFollowing,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
