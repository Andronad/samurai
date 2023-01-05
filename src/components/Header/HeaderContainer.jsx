import { useEffect } from "react";
import axios from "axios";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserData } from "./../../redux/authReducer";

export const HeaderContainer = (props) => {
    const dispatch = useDispatch();

    const { isAuth, login } = useSelector((state) => state.auth);

    useEffect(() => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { id, login, email } = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }, [dispatch]);

    return <Header {...props} isAuth={isAuth} login={login} />;
};
