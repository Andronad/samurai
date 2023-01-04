const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (userId, email, login) => ({
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login },
});

export default authReducer;
