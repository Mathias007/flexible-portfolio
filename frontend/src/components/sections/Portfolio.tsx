import { FC } from "react";

import {
    PortfolioTitle,
    PortfolioHeading,
    PortfolioContent,
} from "../Portfolio";

import portfolioData from "../../data/portfolio.data";

const Portfolio: FC = () => {
    return (
        <section
            className="portfolio section"
            id="portfolio"
            data-testid="portfolio-section"
        >
            <div className="container">
                <PortfolioTitle />
                <PortfolioHeading />
                <PortfolioContent portfolioData={portfolioData} />
            </div>
        </section>
    );
};

export default Portfolio;
