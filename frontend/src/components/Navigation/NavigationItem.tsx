import { FC } from "react";

import Icon from "../general/Icon";

import { navigationModels } from "../../config/models";
import { Link } from "react-router-dom";

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
            <Link
                to={link}
                className={isActive ? "active" : ""}
                data-testid={`navigation-link-${id}`}
            >
                <Icon type={icon} className="nav-icon" /> {label}
            </Link>
        </li>
    );
};

export default NavigationItem;
