import { FC, useState } from "react";

import NavigationItem from "./NavigationItem";

import { INavigationData } from "../../data/navigation.data";

interface INavigationProps {
    navigationData: INavigationData[];
}

const Navigation: FC<INavigationProps> = ({ navigationData }) => {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleItemClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <ul className="nav" data-testid="navigation">
            {navigationData.map((item: INavigationData) => (
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
