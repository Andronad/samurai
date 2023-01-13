import { authMe } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
    isInitialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const setInitialized = isInitialized => ({
    type: SET_INITIALIZED,
    payload: isInitialized,
});

export const initializeApp = () => dispatch => {
    dispatch(setInitialized(false));
    dispatch(authMe()).then(() => dispatch(setInitialized(true)));
};

export default appReducer;
