import { MyPosts } from "./MyPosts";
import {
    updateNewPostTextCreator,
    addPostCreator,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
    return {
        postsData: state.profilePage.postsData,
        newPostData: state.profilePage.newPostData,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        },
    };
};

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);
