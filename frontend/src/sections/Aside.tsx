import { FC } from "react";

import {
    Navigation,
    NavigationLogo,
    NavigationToggler,
} from "../components/Navigation";

import { navigationData } from "../config/data";

interface IAside {
    isMenuClosed: boolean;
    toggler: () => void;
}

const Aside: FC<IAside> = ({ isMenuClosed, toggler }) => {

    return (
        <div
            className={`aside ${isMenuClosed ? "closed" : ""}`}
            data-testid="aside-section"
        >
            <NavigationLogo />
            <NavigationToggler onClick={toggler} />
            <Navigation navigationData={navigationData} />
        </div>
    );
};

export default Aside;
