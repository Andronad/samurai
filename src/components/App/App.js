import Header from "../Header";
import NavBar from "../NavBar";
import Profile from "../Profile";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DialogsContainer } from "./../Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"appContainer"}>
                <Header />
                <NavBar />
                <main className={"appContainer__content"}>
                    <Routes>
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<DialogsContainer />} path="/dialogs" />
                        <Route
                            element={<DialogsContainer />}
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
