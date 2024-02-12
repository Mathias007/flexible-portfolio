import React from "react";

import { PortfolioItem } from ".";
import { portfolioModels } from "../../models";

import SampleProjectLogo from "../../assets/portfolio1.jpg";

interface IPortfolioContentProps {
    portfolioData: portfolioModels.IPortfolioData[];
}

const PortfolioContent: React.FC<IPortfolioContentProps> = ({
    portfolioData,
}) => {
    return (
        <div className="row">
            {portfolioData.map((project) => {
                return (
                    <PortfolioItem
                        key={project.id}
                        // logo={project.logo}
                        logo={SampleProjectLogo}
                        description={project.description}
                    />
                );
            })}
        </div>
    );
};

export default PortfolioContent;
