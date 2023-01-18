import { usersAPI } from "./../api/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followSuccess: (state, action) => {
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    followed: user.id === action.payload ? true : user.followed,
                };
            });
            state.users = newUsers;
        },
        unfollowSuccess: (state, action) => {
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    followed:
                        user.id === action.payload ? false : user.followed,
                };
            });
            state.users = newUsers;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setFollowing: (state, action) => {
            state.followingInProgress = action.payload.isLoading
                ? [...state.followingInProgress, action.payload.id]
                : state.followingInProgress.filter(
                      id => id !== action.payload.id
                  );
        },
    },
});

export const {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setLoading,
    setFollowing,
} = usersSlice.actions;

export const getUsers = (currentPage, pageSize) => dispatch => {
    dispatch(setLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setLoading(false));
    });
};

export const follow = id => dispatch => {
    dispatch(setFollowing(true, id));
    usersAPI.follow(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(setFollowing(false, id));
    });
};

export const unfollow = id => dispatch => {
    dispatch(setFollowing(true, id));
    usersAPI.unfollow(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(id));
        }
        dispatch(setFollowing(false, id));
    });
};

export default usersSlice.reducer;
