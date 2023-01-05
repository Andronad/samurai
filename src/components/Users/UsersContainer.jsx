import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage,
    unfollow,
    setLoading,
    setFollowing,
    getUsers,
} from "./../../redux/usersReducer";
import Users from "./index";

const UsersContainer = ({
    users,
    follow,
    unfollow,
    pageSize,
    totalCount,
    currentPage,
    setCurrentPage,
    isLoading,
    followingInProgress,
    getUsers,
}) => {
    useEffect(() => {
        getUsers(currentPage, pageSize);
    }, [currentPage, pageSize, getUsers]);

    let pagesCount = useMemo(
        () => Math.ceil(totalCount / pageSize),
        [totalCount, pageSize]
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <Users
            pages={pages}
            users={users}
            follow={follow}
            unfollow={unfollow}
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
    getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
