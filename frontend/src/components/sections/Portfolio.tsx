import { FC, useEffect, useState } from "react";

import {
    PortfolioHeading,
    PortfolioContent,
} from "../Portfolio";

import { portfolioModels } from "../../models";

import { ConfigVariables, ServerPaths } from "../../config";
import { Title } from "../general";
import { headersData } from "../../data";

const { SERVER_URL } = ConfigVariables;
const { API, PORTFOLIO } = ServerPaths;

const Portfolio: FC = () => {
    const [portfolioData, setPortfolioData] = useState<portfolioModels.IPortfolioData[]>([]);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${PORTFOLIO}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
                const data = await response.json();
                setPortfolioData(data);
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
                <Title title={headersData.portfolioTitle} />
                <PortfolioHeading />
                <PortfolioContent portfolioData={portfolioData} />
            </div>
        </section>
    );
};

export default Portfolio;
