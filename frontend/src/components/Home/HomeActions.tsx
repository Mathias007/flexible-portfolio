import { FC } from "react";
import { Link } from "react-router-dom";

import { homeData } from "../../config/data";
import { RoutesPaths } from "../../config/global";

const HomeActions: FC = () => {
    return (
        <Link to={`/${RoutesPaths.ABOUT}`} className="btn hire-me" data-testid="home-actions">
            {homeData.homeButtonLabel}
        </Link>
    );
};

export default HomeActions;
