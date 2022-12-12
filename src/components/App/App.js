import Header from "../Header";
import NavBar from "../NavBar";
import Profile from "../Profile";
import "./App.scss";
import { Dialogs } from "./../Dialogs/Dialogs";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = ({
    state: { dialogsPage, profilePage },
    addPost,
    changeNewPostData,
}) => {
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
                                    addPost={addPost}
                                    changeNewPostData={changeNewPostData}
                                />
                            }
                            path="/profile"
                        />
                        <Route
                            element={<Dialogs state={dialogsPage} />}
                            path="/dialogs"
                        />
                        <Route
                            element={<Dialogs state={dialogsPage} />}
                            path="/dialogs/:id"
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
