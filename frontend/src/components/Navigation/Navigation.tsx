import { FC, useState } from "react";

import NavigationItem from "./NavigationItem";

import { navigationModels } from "../../config/models";

interface INavigationProps {
    navigationData: navigationModels.INavigationData[];
}

const Navigation: FC<INavigationProps> = ({ navigationData }) => {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleItemClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <ul className="nav" data-testid="navigation">
            {navigationData.map((item: navigationModels.INavigationData) => (
                <NavigationItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    link={item.link}
                    icon={item.icon}
                    isActive={item.link === activeLink}
                    onItemClick={() => handleItemClick(item.link)}
                />
            ))}
        </ul>
    );
};

export default Navigation;
