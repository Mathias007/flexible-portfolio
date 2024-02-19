import { FC } from "react";

import {
    Navigation,
    NavigationLogo,
    NavigationToggler,
} from "../components/Navigation";

import { navigationData } from "../config/data";

const Aside: FC = () => {
    return (
        <div className="aside" data-testid="aside-section">
            <NavigationLogo />
            <NavigationToggler />
            <Navigation navigationData={navigationData} />
        </div>
    );
};

export default Aside;
