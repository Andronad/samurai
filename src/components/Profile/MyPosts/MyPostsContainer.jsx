import { MyPosts } from "./MyPosts";
import { updateNewPostText, addPost } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import { memo } from "react";

let mapStateToProps = state => {
    return {
        postsData: state.profilePage.postsData,
        newPostData: state.profilePage.newPostData,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            dispatch(updateNewPostText(text));
        },
        addPost: () => {
            dispatch(addPost());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default memo(MyPostsContainer);
