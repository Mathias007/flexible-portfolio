import { FC } from "react";
import { homeData } from "../../data";

const HomeMainHeader: FC = () => {
    return (
        <h3 className="hello" data-testid="home-main-header">
            {homeData.homeHeaderText}<span className="name">{homeData.homeHeaderBold}</span>
        </h3>
    );
};

export default HomeMainHeader;
