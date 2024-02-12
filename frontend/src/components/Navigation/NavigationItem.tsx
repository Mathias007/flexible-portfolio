import { FC } from "react";

import Icon from "../general/Icon";

import { navigationModels } from "../../models";

interface INavigationItemProps extends navigationModels.INavigationData {
    isActive: boolean;
    onItemClick: () => void;
}

const NavigationItem: FC<INavigationItemProps> = ({
    id,
    label,
    link,
    icon,
    isActive,
    onItemClick,
}) => {
    return (
        <li onClick={onItemClick} data-testid={`navigation-item-${id}`}>
            <a
                href={link}
                className={isActive ? "active" : ""}
                data-testid={`navigation-link-${id}`}
            >
                <Icon type={icon} className="nav-icon" /> {label}
            </a>
        </li>
    );
};

export default NavigationItem;
