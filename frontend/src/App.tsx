import { useState } from "react";

import {
    About,
    Account,
    Aside,
    Contact,
    Home,
    Portfolio,
    Services,
} from "./components/sections";

import { StyleSwitcher } from "./components/general";

import "./css/style.css";
import "./css/style-2.css";
import "./css/style-switcher.css";

function App(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? "dark" : "light"} data-testid="app">
            <div className="main-container">
                <Aside />
                <div className="main-content">
                    <Home />
                    <About />
                    <Services />
                    <Portfolio />
                    <Contact />
                    <Account />
                </div>
            </div>
            <StyleSwitcher
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </div>
    );
}

export default App;
