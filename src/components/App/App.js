import Header from "../Header";
import NavBar from "../NavBar";
import Profile from "../Profile";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DialogsContainer } from "./../Dialogs/DialogsContainer";

const App = ({ state: { dialogsPage, profilePage }, dispatch }) => {
    return (
        <BrowserRouter>
            <div className={"appContainer"}>
                <Header />
                <NavBar />
                <main className={"appContainer__content"}>
                    <Routes>
                        <Route
                            element={
                                <Profile
                                    state={profilePage}
                                    dispatch={dispatch}
                                />
                            }
                            path="/profile"
                        />
                        <Route
                            element={
                                <DialogsContainer
                                    state={dialogsPage}
                                    dispatch={dispatch}
                                />
                            }
                            path="/dialogs"
                        />
                        <Route
                            element={
                                <DialogsContainer
                                    state={dialogsPage}
                                    dispatch={dispatch}
                                />
                            }
                            path="/dialogs/:id"
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/profile" replace />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
