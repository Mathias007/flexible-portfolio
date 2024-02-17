import { FC } from "react";
import { Link } from "react-router-dom";

import { RoutesPaths } from "../../config";

const NavigationLogo: FC = () => {
    return (
        <div className="logo" data-testid="navigation-logo">
            <Link to={RoutesPaths.ROOT}>
                <span>M</span>athias
            </Link>
        </div>
    );
};

export default NavigationLogo;
