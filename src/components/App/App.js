import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "../../redux/appReducer";
import Header from "../Header";
import Loader from "../Loader";
import NavBar from "../NavBar";
import Profile from "../Profile";
import { DialogsContainer } from "./../Dialogs/DialogsContainer";
import Login from "./../Login";
import UsersContainer from "./../Users/UsersContainer";
import "./App.scss";

const App = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const isInitialized = useSelector(state => state.appReducer.isInitialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);
    if (!isInitialized) return <Loader />;
    return (
        <BrowserRouter>
            <div className={"appContainer"}>
                <Header />
                <NavBar />
                <main className={"appContainer__content"}>
                    {isAuth ? (
                        <Routes>
                            <Route element={<Profile />} path="/profile" />
                            <Route element={<Profile />} path="/profile/:id" />
                            <Route
                                element={<DialogsContainer />}
                                path="/dialogs"
                            />
                            <Route
                                element={<DialogsContainer />}
                                path="/dialogs/:id"
                            />
                            <Route element={<UsersContainer />} path="/users" />
                            <Route
                                path="*"
                                element={<Navigate to="/profile" replace />}
                            />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route element={<Login />} path="/login" />
                            <Route element={<UsersContainer />} path="/users" />
                            <Route element={<Profile />} path="/profile/:id" />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </Routes>
                    )}
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
