import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../redux/authReducer";

export const HeaderContainer = props => {
    const dispatch = useDispatch();

    const { isAuth, login } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <Header {...props} isAuth={isAuth} login={login} onLogout={onLogout} />
    );
};
