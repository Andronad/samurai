import Header from "../Header";
import NavBar from "../NavBar";
import Profile from "../Profile";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DialogsContainer } from "./../Dialogs/DialogsContainer";
import UsersContainer from "./../Users/UsersContainer";
import Login from "./../Login";
import { useSelector } from "react-redux";

const App = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
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
