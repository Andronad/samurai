const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    followed: user.id === action.payload ? true : user.followed,
                };
            });
            return {
                ...state,
                users: newUsers,
            };
        }
        case UNFOLLOW: {
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    followed:
                        user.id === action.payload ? false : user.followed,
                };
            });
            return {
                ...state,
                users: newUsers,
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const followCreator = id => ({
    type: FOLLOW,
    payload: id,
});

export const unfollowCreator = id => ({
    type: UNFOLLOW,
    payload: id,
});

export const serUsersCreator = users => ({
    type: SET_USERS,
    payload: users,
});

export const setCurrentPageCreator = currentPage => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
});

export default usersReducer;
