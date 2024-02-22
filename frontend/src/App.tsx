import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {
    About,
    // Account,
    Aside,
    Contact,
    Home,
    Portfolio,
    Services,
    Timeline,
} from "./sections";

import { StyleSwitcher } from "./components/general";

import "./assets/css/style.css";
import "./assets/css/style-2.css";
import "./assets/css/style-switcher.css";
import { RoutesPaths } from "./config/global";

import Favicon from "react-favicon";

import warmFavicon from "./assets/favicon/warm/favicon.ico";

function App(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const [favicon, setFavicon] = useState<string>(warmFavicon);

    const [isMenuClosed, setIsMenuClosed] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuClosed(!isMenuClosed);
    };

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    const changeFavicon = (faviconUrl: string) => {
        setFavicon(faviconUrl);
    };

    return (
        <Router>
            <div className={isDarkMode ? "dark" : "light"} data-testid="app">
                <Favicon url={favicon} />

                <div className="main-container">
                    <Aside isMenuClosed={isMenuClosed} toggler={toggleMenu} />
                    <div
                        className={`main-content ${isMenuClosed ? "wide" : ""}`}
                    >
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
                    changeFavicon={changeFavicon}
                />
            </div>
        </Router>
    );
}

export default App;
