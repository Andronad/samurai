import { useEffect } from "react";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { authMe, logout } from "./../../redux/authReducer";

export const HeaderContainer = props => {
    const dispatch = useDispatch();

    const { isAuth, login } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        dispatch(authMe());
    }, [dispatch]);

    return (
        <Header {...props} isAuth={isAuth} login={login} onLogout={onLogout} />
    );
};
