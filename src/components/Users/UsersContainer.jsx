import axios from "axios";
import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage,
    unfollow,
    setLoading,
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
    isLoading,
    setLoading,
}) => {
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users", {
                params: { page: currentPage, count: pageSize },
            })
            .then(data => {
                setUsers(data.data.items);
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

    return (
        <Users
            pages={pages}
            users={users}
            follow={follow}
            unfollow={unfollow}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
        />
    );
};

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
});

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
