import { FC } from "react";
import { homeData } from "../../data";

const HomeActions: FC = () => {
    return (
        <a href="#about" className="btn hire-me" data-testid="home-actions">
            {homeData.homeButtonLabel}
        </a>
    );
};

export default HomeActions;
