import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
    About,
    // Account,
    Aside,
    Contact,
    Home,
    Portfolio,
    Services,
    Timeline,
} from "./components/sections";

import { StyleSwitcher } from "./components/general";

import "./assets/css/style.css";
import "./assets/css/style-2.css";
import "./assets/css/style-switcher.css";
import { RoutesPaths } from "./config";

function App(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? "dark" : "light"} data-testid="app">
                <div className="main-container">
                    <Aside />
                    <div className="main-content">
                        <Routes>
                            <Route path={RoutesPaths.ROOT} element={<Home />} />
                            <Route path={RoutesPaths.HOME} element={<Home />} />
                            <Route
                                path={RoutesPaths.ABOUT}
                                element={<About />}
                            />
                            <Route
                                path={RoutesPaths.TIMELINE}
                                element={<Timeline />}
                            />
                            <Route
                                path={RoutesPaths.SERVICES}
                                element={<Services />}
                            />
                            <Route
                                path={RoutesPaths.CONTACT}
                                element={<Contact />}
                            />
                            <Route
                                path={RoutesPaths.PORTFOLIO}
                                element={<Portfolio />}
                            />
                            {/* <Route
                                path={RoutesPaths.ACCOUNT}
                                element={<Account />}
                            /> */}
                        </Routes>
                    </div>
                </div>
                <StyleSwitcher
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            </div>
        </Router>
    );
}

export default App;
