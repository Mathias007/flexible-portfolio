import { FC } from "react";
import { portfolioData } from "../../config/data";

const PortfolioHeading: FC = () => {
    return (
        <div className="row" data-testid="portfolio-heading">
            <div className="portfolio-heading padd-15">
                <h2>{portfolioData.portfolioProjectsHeading}</h2>
            </div>
        </div>
    );
};

export default PortfolioHeading;
