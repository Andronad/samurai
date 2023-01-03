import axios from "axios";
import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
    followCreator,
    serUsersCreator,
    setCurrentPageCreator,
    unfollowCreator,
} from "./../../redux/usersReducer";
import Users from "./index";

const UsersContainer = ({
    users,
    follow,
    unfollow,
    setUsers,
    pageSize,
    totalCount,
    currentPage,
    setCurrentPage,
}) => {
    useEffect(() => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users", {
                params: { page: currentPage, count: pageSize },
            })
            .then(data => setUsers(data.data.items));
    }, [setUsers, currentPage, pageSize]);

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
        />
    );
};

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = dispatch => ({
    follow: id => dispatch(followCreator(id)),
    unfollow: id => dispatch(unfollowCreator(id)),
    setUsers: users => dispatch(serUsersCreator(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageCreator(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
