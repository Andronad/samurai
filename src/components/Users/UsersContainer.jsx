import { connect } from "react-redux";
import {
    followCreator,
    serUsersCreator,
    unfollowCreator,
} from "./../../redux/usersReducer";
import Users from "./index";

const mapStateToProps = state => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = dispatch => ({
    follow: id => dispatch(followCreator(id)),
    unfollow: id => dispatch(unfollowCreator(id)),
    setUsers: users => dispatch(serUsersCreator(users)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
