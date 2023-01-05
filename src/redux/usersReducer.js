import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_LOADING = "SET_LOADING";
const SET_FOLLOWING = "SET_FOLLOWING";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            const newUsers = state.users.map((user) => {
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
            const newUsers = state.users.map((user) => {
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
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case SET_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.payload.isLoading
                    ? [...state.followingInProgress, action.payload.id]
                    : state.followingInProgress.filter(
                          (id) => id !== action.payload.id
                      ),
            };
        }
        default: {
            return state;
        }
    }
};

export const followSuccess = (id) => ({
    type: FOLLOW,
    payload: id,
});

export const unfollowSuccess = (id) => ({
    type: UNFOLLOW,
    payload: id,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
});

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading,
});

export const setFollowing = (isLoading, id) => ({
    type: SET_FOLLOWING,
    payload: { isLoading, id },
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setLoading(false));
    });
};

export const follow = (id) => (dispatch) => {
    dispatch(setFollowing(true, id));
    usersAPI.follow(id).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(setFollowing(false, id));
    });
};

export const unfollow = (id) => (dispatch) => {
    dispatch(setFollowing(true, id));
    usersAPI.unfollow(id).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(id));
        }
        dispatch(setFollowing(false, id));
    });
};

export default usersReducer;
