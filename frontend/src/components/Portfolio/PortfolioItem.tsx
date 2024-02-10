import { FC } from "react";

interface IPortfolioItemProps {
    logo: string;
    description: string;
}

const PortfolioItem: FC<IPortfolioItemProps> = ({ logo, description }) => {
    return (
        <div className="portfolio-item padd-15" data-testid="portfolio-item">
            <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={logo} alt={description} />
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
