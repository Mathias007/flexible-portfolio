import { FC } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../../config/data";

interface IPortfolioItemProps {
    description: string;
    homepage?: string;
    html_url: string;
    language: string;
    name: string;
}

const PortfolioItem: FC<IPortfolioItemProps> = ({
    description,
    homepage,
    html_url,
    language,
    name,
}) => {
    return (
        <div className="portfolio-item padd-15" data-testid="portfolio-item">
            <div className="portfolio-item-inner shadow-dark">
                <h4>
                    {name} ({language})
                </h4>
                <p>{description}</p>
                <div
                    className="buttons padd-15"
                    data-testid="portfolio-project-buttons"
                >
                    <Link to={html_url} className="btn">
                        {portfolioData.portfolioBourceButtonLabel}
                    </Link>
                    {homepage && (
                        <Link to={homepage} className="btn hire-me">
                            {portfolioData.portfolioPreviewButtonLabel}
                        </Link>
                    )}
                </div>
                {/* <div className="portfolio-img"> */}
                {/* <img src={logo} alt={description} /> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default PortfolioItem;
