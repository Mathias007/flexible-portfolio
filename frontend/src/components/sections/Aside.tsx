import { FC } from "react";

import { Navigation, NavigationLogo, NavigationToggler } from "../Navigation";

import navigationData from "../../data/navigation.data";

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
