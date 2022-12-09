import Header from "../Header";
import NavBar from "../NavBar";
import Profile from "../Profile";
import "./App.scss";
import { Dialogs } from "./../Dialogs/Dialogs";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"appContainer"}>
                <Header />
                <NavBar />
                <main className={"appContainer__content"}>
                    <Routes>
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Dialogs />} path="/dialogs" />
                        <Route element={<Dialogs />} path="/dialogs/:id" />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
