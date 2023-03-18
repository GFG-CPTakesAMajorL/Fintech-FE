import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import PrivateRoute from "./containers/PrivateRoute";
import InvertedPrivateRoute from "./containers/InvertedPrivateRoute";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import About from "./containers/About";
import Help from "./containers/Help";
import PDFViewer from "./containers/PDFViewer";
import MyTemplates from "./containers/MyTemplates";
import Extract from "./containers/Extract";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<InvertedPrivateRoute />}>
                        <Route
                            exact
                            path="/"
                            element={<Signup />}
                            key='route-signup-screen'
                        />
                    </Route>
                    <Route exact path='/login' element={<InvertedPrivateRoute />}>
                        <Route
                            exact
                            path="/login"
                            element={<Login />}
                            key='route-signup-screen'
                        />
                    </Route>
                    <Route exact path='/home' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/home"
                            element={<Home />}
                            key="route-home-screen"
                        />
                    </Route>
                    <Route exact path='/pdf' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/pdf"
                            element={<PDFViewer />}
                            key="route-pdf-screen"
                        />
                    </Route>
                    <Route exact path='/about' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                            key="route-about-screen"
                        />
                    </Route>
                    <Route exact path='/help' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/help"
                            element={<Help />}
                            key="route-help-screen"
                        />
                    </Route>
                    <Route exact path='/mytemplates' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/mytemplates"
                            element={<MyTemplates />}
                            key="route-template-screen"
                        />
                    </Route>
                    <Route exact path='/extract' element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/extract"
                            element={<Extract />}
                            key='route-temp-screen'
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
