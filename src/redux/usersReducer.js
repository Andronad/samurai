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
        toggleFollow: (state, action) => {
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    followed:
                        user.id === action.payload
                            ? !user.followed
                            : user.followed,
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
    toggleFollow,
    setUsers,
    setCurrentPage,
    setLoading,
    setFollowing,
} = usersSlice.actions;

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(setLoading(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setLoading(false));
};

const followUnfollowLogic = async (dispatch, id, apiMethod) => {
    dispatch(setFollowing(true, id));
    const response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(toggleFollow(id));
    }
    dispatch(setFollowing(false, id));
};

export const follow = id => async dispatch => {
    const apiMethod = usersAPI.follow;
    followUnfollowLogic(dispatch, id, apiMethod);
};

export const unfollow = id => dispatch => {
    const apiMethod = usersAPI.unfollow;
    followUnfollowLogic(dispatch, id, apiMethod);
};

export default usersSlice.reducer;
