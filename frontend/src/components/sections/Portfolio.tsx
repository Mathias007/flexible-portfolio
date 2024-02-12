import { FC, useEffect, useState } from "react";

import {
    PortfolioTitle,
    PortfolioHeading,
    PortfolioContent,
} from "../Portfolio";

import { portfolioModels } from "../../models";

const Portfolio: FC = () => {
    const [portfolioData, setSocialData] = useState<portfolioModels.IPortfolioData[]>([]);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/portfolio");
                if (!response.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
                const data = await response.json();
                setSocialData(data);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };

        fetchPortfolioData();
    }, []);
    
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
