import { FC } from "react";

interface INavigationTogglerProps {
    onClick: () => void;
}

const NavigationToggler: FC<INavigationTogglerProps> = ({ onClick }) => {
    return (
        <div
            className="nav-toggler"
            data-testid="navigation-toggler"
            onClick={onClick}
        >
            <span></span>
        </div>
    );
};

export default NavigationToggler;
