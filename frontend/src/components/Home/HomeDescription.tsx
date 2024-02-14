import { FC } from "react";
import { homeData } from "../../data";

const HomeDescription: FC = () => {
    return (
        <p data-testid="home-description">
            {homeData.homeDescription}
        </p>
    );
};

export default HomeDescription;
