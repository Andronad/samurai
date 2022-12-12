let rerenderEntireTree = () => {
    console.log("state has been changed");
};

const state = {
    profilePage: {
        postsData: [
            { message: "Hi, how are you?", id: 1, likesCount: 12 },
            { message: "It is my first post??", id: 2, likesCount: 13 },
        ],
        newPostData: "rr",
    },
    dialogsPage: {
        dialogsData: [
            { name: "Andrei", id: 1 },
            { name: "Stas", id: 2 },
            { name: "Dasha", id: 3 },
            { name: "Dmitriy", id: 4 },
        ],
        messages: [
            { message: "Hi", id: 1 },
            { message: "How are you?", id: 2 },
            { message: "Youy", id: 3 },
        ],
    },
};

export default state;

export const addPost = () => {
    const newPost = {
        id: 1,
        message: state.profilePage.newPostData,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    changeNewPostData("");
};

export const changeNewPostData = newText => {
    state.profilePage.newPostData = newText;
    rerenderEntireTree(state);
};

export const subsribe = observer => {
    rerenderEntireTree = observer;
};
