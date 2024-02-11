import { FC } from "react";

const PortfolioHeading: FC = () => {
    return (
        <div className="row" data-testid="portfolio-heading">
            <div className="portfolio-heading padd-15">
                <h2>My Last Projects:</h2>
            </div>
        </div>
    );
};

export default PortfolioHeading;
