import React, { useEffect, useState } from "react";

import { PortfolioItem } from ".";
import { portfolioModels } from "../../models";

import { ConfigVariables } from "../../config";
import { Link } from "react-router-dom";
import { portfolioData } from "../../data";
const { GITHUB_API_URL, GITHUB_ACCOUNT } = ConfigVariables;

interface IPortfolioContentProps {
    portfolioData: portfolioModels.IPortfolioData[];
}

const PortfolioContent: React.FC<IPortfolioContentProps> = (
    {
        // portfolioData,
    }
) => {
    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch(`${GITHUB_API_URL}?per_page=100`);
                if (!response.ok) {
                    throw new Error("Failed to fetch Github API data");
                }
                const data = await response.json();
                setGithubData(data);
            } catch (error) {
                console.error("Error fetching Github API data:", error);
            }
        };

        fetchGithubData();
    }, []);

    const filterAndSortProjects = (data: any, countOutput: number) =>
        data
            .filter(
                (element: any) =>
                    element.name && element.description && element.created_at
            )
            .sort(function (a: any, b: any) {
                return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            })
            .slice(0, countOutput);

    return (
        <div className="row">
            {filterAndSortProjects(githubData, 9).map((project: any) => {
                return (
                    <PortfolioItem
                        key={project.id}
                        description={project.description}
                        homepage={project.homepage}
                        html_url={project.html_url}
                        language={project.language}
                        name={project.name}
                    />
                );
            })}
            <Link to={GITHUB_ACCOUNT} target="_blank" className="btn hire-me">
                {portfolioData.portfolioMoreButtonLabel}
            </Link>
        </div>
    );
};

export default PortfolioContent;
