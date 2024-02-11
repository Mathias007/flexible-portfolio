import React from "react";

import { PortfolioItem } from ".";

import { IPortfolioData } from "../../data/portfolio.data";

interface IPortfolioContentProps {
    portfolioData: IPortfolioData[];
}

const PortfolioContent: React.FC<IPortfolioContentProps> = ({ portfolioData }) => {
    return (
        <div className="row">
            {portfolioData.map((project) => {
                return (
                    <PortfolioItem
                        key={project.id}
                        logo={project.logo}
                        description={project.description}
                    />
                );
            })}
        </div>
    );
};

export default PortfolioContent;
