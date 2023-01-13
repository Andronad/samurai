import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const RESET_AUTH_USER_DATA = "RESET_AUTH_USER_DATA";

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
        case RESET_AUTH_USER_DATA: {
            return initialState;
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

export const resetAuthUserData = () => ({
    type: RESET_AUTH_USER_DATA,
});

export const authMe = () => dispatch => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            const { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
};

export const login =
    (email, password, rememberMe = false, successCallback, unsuccessCallback) =>
    dispatch => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe());
                successCallback();
            } else {
                unsuccessCallback();
            }
        });
    };

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(resetAuthUserData());
        }
    });
};

export default authReducer;
