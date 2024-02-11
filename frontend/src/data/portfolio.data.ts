import SampleProjectLogo from "../assets/portfolio1.jpg";

export interface IPortfolioData {
    id: number;
    logo: string;
    description: string;
}

const portfolioData: IPortfolioData[] = [
    { id: 0, logo: SampleProjectLogo, description: "project" },
    { id: 1, logo: SampleProjectLogo, description: "project" },
    { id: 2, logo: SampleProjectLogo, description: "project" },
    { id: 3, logo: SampleProjectLogo, description: "project" },
    { id: 4, logo: SampleProjectLogo, description: "project" },
    { id: 5, logo: SampleProjectLogo, description: "project" },
];

export default portfolioData;
